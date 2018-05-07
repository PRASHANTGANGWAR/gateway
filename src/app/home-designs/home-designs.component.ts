import { Component, OnInit } from '@angular/core';
import { ApiService,SharedService } from '../shared';
import { NgForm } from '@angular/forms';
import { SegmentService } from 'ngx-segment-analytics';
import { Router,ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Rx';


declare var $: any;
declare var google: any;
@Component({
  selector: 'home-designs',
  templateUrl: './home-designs.component.html'
})
export class HomeDesignsComponent implements OnInit {
  featuredHomes : any;
  isDataAvailable: boolean = false;
  constructor(
    private apiService: ApiService, private router: Router, private segment: SegmentService
  ) {}
  sysIds:any=[];
  sliderImages:any=[];
  homeCount : any;
  hsection:any; 
  msection:any; 
  ctasection:any;
  hhsection:any;
  dbsection:any;
  imgslisection:any;
  showsection:any;
  showData:boolean = false;
  firstImage:string="";
  secondImage:string="";
  thirdImage:string="";
  bgimg:string = "";
  hdownPDF:string = "";
  hotspotImage1:string = "";
  hotspotImage2:string = "";
  hotspotImage3:string = "";
  hotspotImage4:string = "";
  dbimag1:string = "";
  dbimag2:string = "";
  dbimag3:string = "";
  dbpdf1:string = "";
  dbpdf2:string = "";
  dbpdf3:string = "";
  submitted = false;
  info: any = { firstname: '', lastname: '', phone:'', email:''};
  genericInfo:any;
  ngOnInit() {

    $(".nav-v2.innerpage-header").show();
    $(".nav-v2.home-header").hide();
    $(".nav-v2.innerpage-header").addClass('globalNav');
    $(".nav-v2.home-header").removeClass('globalNav');

    window.scrollTo(0, 0);
    this.segment.page().then(() => console.log("Event sended"));
    //fetching the list of featured homes
      this.apiService.get('/home_for_sales/featured_home').subscribe((res:any)=>{
          this.isDataAvailable = true;
          this.featuredHomes = res.homes;
          $.getScript('js/customSlick.js');
          this.getGenericInfopack();
        },
        err=>{
          console.log(err);
      }); 
      //count of homes
      this.apiService.get('/communities/count_for_home_and_community').subscribe((res:any)=>{
          this.homeCount = res.home_count;
        },
        err=>{
          console.log(err);
      }); 

    let self = this;
    // header section
    $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/gxzbmM8Br26miwWQuImkm?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        self.hsection = data.fields;
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["downloadpdf"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
        function(data,status){
          self.hdownPDF = data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["Fullwidthbackgroundimage"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
        function(data,status){ 
          self.bgimg = data.fields.file.url;
        });
      })

    // middle section
    $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/1Lo1zQ5CrWAYmaoUySiEAk?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        self.msection = data.fields;
      })

    // our home hotspot section
    $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/CaJyLjIhhIiccw2iUmQII?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        self.hhsection = data.fields;
        console.log(data.fields);
        // images of hotspot section 
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+self.hhsection.ourHomeHotspotSliderImage.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
            function(data,status){
              self.hotspotImage1 = data.fields.file.url;
            });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+self.hhsection.ourHomeHotspotSliderImage2.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
            function(data,status){
              self.hotspotImage2 = data.fields.file.url;
            });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+self.hhsection.ourHomeHotspotSliderImage3.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
            function(data,status){
              self.hotspotImage3 = data.fields.file.url;
            });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+self.hhsection.ourHomeHotspotSliderImage4.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
            function(data,status){
              self.hotspotImage4 = data.fields.file.url;
              setTimeout(function(){
                $.getScript('js/homedesign_hotspot.js');
              },1000)              
            });
      })

    // download brochure section
    $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/6ccfpcFydUcYKuacCQmWkS?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        self.dbsection = data.fields;
        console.log(data.fields);
        //function for images
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+self.dbsection.icon1.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
            function(data,status){
              self.dbimag1 = data.fields.file.url;
            });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+self.dbsection.icon2.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
            function(data,status){
              self.dbimag2 = data.fields.file.url;
            });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+self.dbsection.icon3.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
            function(data,status){
              self.dbimag3 = data.fields.file.url;
            });

        // api call for getting pdfs
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+self.dbsection.downloadPdfMedia1.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
            function(data,status){
              self.dbpdf1 = data.fields.file.url;
            });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+self.dbsection.downloadPdfMedia2.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
            function(data,status){
              self.dbpdf2 = data.fields.file.url;
            });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+self.dbsection.downloadPdfMedia3.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
            function(data,status){
              self.dbpdf3 = data.fields.file.url;
            });

      })

    // image slider section
    $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/1SfL2pUMHyU84yM8I0eK0U?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        self.imgslisection = data.fields;
        self.imgslisection.ourHomeFullWidthSlider.forEach(data => {
          self.sysIds.push(data.sys.id);
        });
        $.getScript('js/slider.js');
        // getting images for slider
        /*self.sysIds.forEach(id => {
          $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
            function(data,status){
              self.sliderImages.push(data.fields.file.url)
            });
        });*/

        let promises:any = [];
        self.sysIds.forEach(function(id) {
          promises.push( $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85"))
        });
        Observable.forkJoin(promises)
         .subscribe((response) => {
            response.forEach((item:any) => {
              self.sliderImages.push(item.fields.file.url);
            })
        });
      })

    // showcase section
    $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/4sQG94E3HG0UUKY0qKSW4I?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        self.showsection = data.fields;
        // for getting images url 
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["showcaseImageTitleMedia"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
        function(data,status){
          self.firstImage = data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["showcaseImage2"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
        function(data,status){
          self.secondImage = data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["showcaseImage3"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
        function(data,status){
          self.thirdImage = data.fields.file.url;
          self.showData = true;
        });
      })

    // cta section
    $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5jeApqe6NiM6O2ugMQouQo?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        self.ctasection = data.fields;
      })
  }

        getGenericInfopack(){
      this.apiService.get('/pdf_info_packs/featured_pack').subscribe((res:any)=>{
       this.genericInfo = res; 
        window.localStorage.setItem('generic_url',this.genericInfo.info_pack.info_pdf.url);
      });
    }

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
        window.localStorage.setItem('generic_data',JSON.stringify(userData));
        console.log('success!');
         this.segment.track('GetInfoPack',{
         firstname: this.info.firstname,
         lastname: this.info.lastname,
         plan: this.info.plan,
         phone: this.info.phone,
         email: this.info.email,
         description: this.info.area
        }).then(() => {
            window.localStorage.setItem('genericCheck','1');
            this.router.navigateByUrl('/success');
            $('#get-an-info-pack-modal-static')[0].style.display = 'none';
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
            console.log("Event sended");
          });
      }else{
        console.log('validation failed!');
      }
    }

  changeColor($event){
    $event.target.style.backgroundColor = $event.type=="mouseover" ? '#ffffff': '#105dac';
    $event.target.style.color =  $event.type=="mouseover" ? '#105dac':'#ffffff';
  }

  onHover($event){
    $event.target.style.color = $event.type=="mouseover" ? '#105dac':'#414952';
  }
}