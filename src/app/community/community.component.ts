import { Component, OnInit, AfterViewChecked,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SegmentService } from 'ngx-segment-analytics';

import { ApiService,SharedService } from '../shared';
import { Meta, Title } from '@angular/platform-browser';
//declare var google: any;
declare var $: any;

@Component({
  selector: 'community-slug-page',
  templateUrl: './community.component.html'
})
export class communityComponent implements OnInit {
  settingsForm: FormGroup;
  info: any = { firstname: '', lastname: '', phone:'', email:''};
  submitted = false;
  errors: Object = {};
  cities: Object = {};
  countries:any = [];
  cityOption:any = [];
  outputs:any = [];
  citySelect = false;
  preLoved:any=[];
  newHomes:any=[];
  bodyClasses:string = "community-detail-page";
  month:any=["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
  isDataAvailable:boolean = false;
  comunityDetail:any = {};
  comunitylatestDetail:any = {};
  shortName: string='';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private sharedService:SharedService,
    private fb: FormBuilder,
    private segment: SegmentService,
    private Meta:Meta,
    private title: Title
  ) {
    // create form group using the form builder
    this.settingsForm = this.fb.group({
      image: '',
      username: '',
      bio: '',
      email: '',
      password: ''
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
       $('body').addClass(this.bodyClasses);
        window.scrollTo(0, 0);
        this.segment.page().then(() => console.log("Event sended"));
        let user_data = JSON.parse(window.localStorage.getItem('user_data'));
        if(user_data){
          this.info.firstname = user_data.firstname;
          this.info.lastname = user_data.lastname;
          this.info.plan = user_data.plan;
          this.info.phone = user_data.phone;
          this.info.email = user_data.email;
          this.info.area = user_data.description;
        }
        let slugValue = params['slug'];
        let data = {"community": { "short_name" : slugValue}};
        this.apiService.getCommunitiesDetail('/communities/find_community',data).subscribe(result=>{
          this.title.setTitle(result.community.seo_title);
          this.Meta.updateTag({ name: 'description', content: result.community.meta_description });
          this.comunityDetail = result;
          this.comunitylatestDetail = result.community;
          this.isDataAvailable = true;
          let title:any ={};
          title.first_name = this.comunitylatestDetail.first_name;
          title.primary_color = this.comunitylatestDetail.primary_color;
          title.last_name = this.comunitylatestDetail.last_name;
          title.secondary_color = this.comunitylatestDetail.secondary_color;  

          this.sharedService.publishData(title);
          this.shortName = this.comunitylatestDetail.short_name
          if(this.comunityDetail.events.length){
            let event_date:any;
            let day:any;
            let mon:any;
            for(var i=0;i<this.comunityDetail.events.length;i++){
              event_date = new Date(this.comunityDetail.events[i].start_time);
              day = event_date.getUTCDate();
              mon = this.month[event_date.getUTCMonth()];
              this.comunityDetail.events[i]["day"]= day;
              this.comunityDetail.events[i]["month"]= mon;
            }
          }
          if(this.comunityDetail.homes.length){
            this.comunityDetail.homes.forEach(home => {
               if(home.record_type=="Pre-loved"){
                   this.preLoved.push(home);
               }
               else if(home.record_type=="New"){
                   this.newHomes.push(home);
               }
            });
          }
          $.getScript('js/slider.js'); // autoattaching itself
          $.getScript('js/customSlick.js');
        })
    });
  }
  ngOnDestroy() { 
    $('body').removeClass(this.bodyClasses);
    this.title.setTitle('Gateway Lifestyle | Over 50s Residential Communities');
    this.Meta.updateTag({ name: 'description', content: 'Gateway' });
    let headerTitle:any={first_name:'Gateway',primary_color:'#003C6B',last_name:'Lifestyle',secondary_color:'#62717f'};
    this.sharedService.publishData(headerTitle);
  }

  readMore(){           
    $(".read-more-hide").toggleClass("show-content");
    if ($(".tab-pane").find(".show-content")) {                
       $("#read-more").hide();
    }
  };

  getInfo(form: NgForm){
    this.submitted = true;
    if (form.valid) {
      let userData:any = {};
      userData.firstname = this.info.firstname;
      userData.lastname = this.info.lastname;
      userData.plan = this.info.plan;
      userData.phone = this.info.phone;
      userData.email = this.info.email;
      userData.description = this.info.area;
      window.localStorage.setItem('user_data',JSON.stringify(userData));
      console.log('success!');
       this.segment.track('GetInfoPack',{
       firstname: this.info.firstname,
       lastname: this.info.lastname,
       plan: this.info.plan,
       phone: this.info.phone,
       email: this.info.email,
       description: this.info.area,
       community_short_name: this.shortName
      }).then(() => {
          window.localStorage.setItem('basicinfo_url',this.comunityDetail.info_pack.info_pdf.url);
          window.localStorage.setItem('genericCheck','0');
          this.router.navigateByUrl('/success');
          $('#get-an-info-pack-modal')[0].style.display = 'none';
          $('body').removeClass('modal-open');
          $('.modal-backdrop').remove();
          console.log("Event sended");
        });
    }else{
      console.log('validation failed!');
    }
  }

  infoPdf(url:any){
    let info_url = 'https://gateway-lifestyle.herokuapp.com'+url;
    window.open(info_url, "_blank");
  }

  goToFb(){
    let url: string = '';
      if (!/^http[s]?:\/\//.test(this.comunityDetail.facebook_links[0].link)) {
          url += 'http://';
      }

      url += this.comunityDetail.facebook_links[0].link;
     window.open(url, "_blank");
  }

  scrollTo(element){
     element.scrollIntoView({behavior:"smooth"});
  }

  changeColor($event){
    $event.target.style.backgroundColor = $event.type=="mouseover" ? this.comunitylatestDetail.primary_color:'#ffffff';
    $event.target.style.color =  $event.type=="mouseover" ? '#ffffff':this.comunitylatestDetail.primary_color;
  }

  changeInfoColor($event){
    $event.target.style.backgroundColor = $event.type=="mouseover" ? '#ffffff':this.comunitylatestDetail.primary_color;
    $event.target.style.color =  $event.type=="mouseover" ? this.comunitylatestDetail.primary_color:'#ffffff';
  }

  onHover($event){
    $event.target.style.color = $event.type=="mouseover" ? this.comunitylatestDetail.primary_color:'#414952';
  }

  after($event){
    $event.target.style.color = $event.type=="mouseover" ? this.comunitylatestDetail.primary_color:'#414952';
    $event.target.getElementsByTagName('div')[0].style.background = $event.type=="mouseover" ? this.comunitylatestDetail.primary_color:'none';
  }

  offerDetails(offer_url){
    window.open(offer_url, "_blank");
  }

  onOffer($event){
    $event.target.style.color = $event.type=="mouseover" ? '#ffffff' : this.comunitylatestDetail.primary_color;
  }

  onfb($event){
     $event.target.style.color = $event.type=="mouseover" ? this.comunitylatestDetail.primary_color : '#ffffff';
  }

  goToHomeDetail(page:string){
    this.router.navigateByUrl('/homes-for-sale/' + page);
  }

  goToEventDetail(event_id:any){
    this.router.navigateByUrl('/events/' + event_id);
  }

  selectOption(value : string){
    this.citySelect = true;
    this.cityOption=this.cities[value];
  }

  selectOptionCity(value : string){
   this.outputs = [{'1':value},{'2':value},{'3':value},{'4':value},{'5':value},{'6':value},{'7':value},{'8':value},{'9':value},{'10':value}];
  }

}

