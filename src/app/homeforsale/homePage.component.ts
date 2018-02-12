import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService,SharedService } from '../shared';
import { NgForm } from '@angular/forms';
import { SegmentService } from 'ngx-segment-analytics';

declare var $:any;
@Component({
  selector: 'home-for-sale',
  templateUrl: './homepage.comonent.html'
})


export class homePagecomponent implements OnInit { 
	homePage:String  = '';
	info: any = { firstname: '', lastname: '', phone:'', email:''};
	submitted = false;
  home_detail:any;
  linkedCommunity:any;
  slider_images:any=[];
  fullDetail:any;
  month:any=["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
  preLoved:any=[];
  newHomes:any=[];
  bodyClasses:string = "community-detail-page";
  shortName:string='';

constructor(
  private router: Router,
  private apiService:ApiService,
  private route: ActivatedRoute,
  private segment: SegmentService,
  private sharedService:SharedService
  ){}


	ngOnInit() {
		this.route.params.subscribe(params => {
      this.segment.page().then(() => console.log("Event sended"));
      $('body').addClass(this.bodyClasses);
      window.scrollTo(0, 0);
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
			this.apiService.getHomeDetail('/home_for_sales/'+slugValue).subscribe((res)=>{
				console.log(res);
        this.fullDetail = res;
        this.home_detail = res.home_for_sale;
        this.linkedCommunity =res.home_community;
        this.shortName = this.linkedCommunity.short_name;
        let title:any ={};
        title.first_name = this.linkedCommunity.first_name;
        title.primary_color = this.linkedCommunity.primary_color;
        title.last_name = this.linkedCommunity.last_name;
        title.secondary_color = this.linkedCommunity.secondary_color;  
        this.sharedService.publishData(title);
        $.getScript('js/slider.js'); // autoattaching itself
        $.getScript('js/customSlick.js');
        for(var i=1; i<this.home_detail.images.length;i++){
          this.slider_images.push(this.home_detail.images[i]);
        }
        if(this.fullDetail.community_events.length){
            let event_date:any;
            let day:any;
            let mon:any;
            for(var j=0;j<this.fullDetail.community_events.length;j++){
              event_date = new Date(this.fullDetail.community_events[j].start_time);
              day = event_date.getUTCDate();
              mon = this.month[event_date.getUTCMonth()];
              this.fullDetail.community_events[j]["day"]= day;
              this.fullDetail.community_events[j]["month"]= mon;
            }

            this.fullDetail.other_homes.forEach(home => {
               if(home.record_type=="Pre-loved"){
                   this.preLoved.push(home);
               }
               else if(home.record_type=="New"){
                   this.newHomes.push(home);
               }
            });
         }
			}, err=>{
				console.log(err);
			});
		});
  	}

    ngOnDestroy() { 
        $('body').removeClass(this.bodyClasses);
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
          console.log("Event sended");
          window.localStorage.setItem('basicinfo_url',this.fullDetail.community_info_pack.info_pdf.url);
          window.localStorage.setItem('genericCheck','0');
          this.router.navigateByUrl('/success');
          $('#get-an-info-pack-modal')[0].style.display = 'none';
          $('body').removeClass('modal-open');
          $('.modal-backdrop').remove();
        });
    }else{
      console.log('validation failed!');
    }
  }

  scrollTo(element){
     element.scrollIntoView({behavior:"smooth"});
  }

  goToCommunity(community_name:string){
    this.router.navigateByUrl('/community/' + community_name);
  }

  changeColor($event){
    $event.target.style.backgroundColor = $event.type=="mouseover" ? this.linkedCommunity.primary_color:'#ffffff';
    $event.target.style.color =  $event.type=="mouseover" ? '#ffffff':this.linkedCommunity.primary_color;
  }

  changeInfoColor($event){
    $event.target.style.backgroundColor = $event.type=="mouseover" ? '#ffffff':this.linkedCommunity.primary_color;
    $event.target.style.color =  $event.type=="mouseover" ? this.linkedCommunity.primary_color:'#ffffff';
  }

  onHover($event){
    $event.target.style.color = $event.type=="mouseover" ? this.linkedCommunity.primary_color:'#414952';
  }

  after($event){
    $event.target.style.color = $event.type=="mouseover" ? this.linkedCommunity.primary_color:'#414952';
    $event.target.getElementsByTagName('div')[0].style.background = $event.type=="mouseover" ? this.linkedCommunity.primary_color:'none';
  }

  onOffer($event){
    $event.target.style.color = $event.type=="mouseover" ? '#ffffff' : this.linkedCommunity.primary_color;
  }

  onfb($event){
     $event.target.style.color = $event.type=="mouseover" ? this.linkedCommunity.primary_color : '#ffffff';
  }
}