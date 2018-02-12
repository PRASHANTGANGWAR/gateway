import { Component, OnInit } from '@angular/core';
import { ApiService,SharedService } from '../shared';
import { NgForm } from '@angular/forms';
import { SegmentService } from 'ngx-segment-analytics';
import { Router,ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-ourteam',
  templateUrl: './ourteam.component.html',
  styleUrls: ['./ourteam.component.css']
})
export class OurteamComponent implements OnInit {

  ourteamHerohead:any;
  ourteamHerotext: any;
  ourTeamDirectorHeading: any;
  directorTitle1:any;
  directorTitle2:any;
  directorTitle3:any;
  directorTitle4:any;
  directorTitle5:any;
  directorDesignation1:any;
  directorDesignation2:any;
  directorDesignation3:any;
  directorDesignation4:any;
  directorDesignation5:any;
  directorDescription1:any;
  directorDescription2:any;
  directorDescription3:any;
  directorDescription4:any;
  directorDescription5:any;
  bgimg : any;
  chatData : any;
  standardCtaInfoPackDescription: any;
  standardCtaInfoPackButtonText:any;
  standardCtaInfoPackAfterButtonText: any;
  boardOfDirectors:any;
  teamManagement:any;
  managementHeading:any;
  managementTitle1: any;
  managementTitle2: any;
  managementTitle3: any;
  managementTitle4: any;
  managementDesignation1: any;
  managementDesignation2: any;
  managementDesignation3: any;
  managementDesignation4: any;
  managementDescription1: any;
  managementDescription2: any;
  managementDescription3: any;
  managementDescription4: any;
  directorimg1:any;
  directorimg2:any;
  directorimg3:any;
  directorimg4:any;
  directorimg5:any;
  managementimg1:any;
  managementimg2:any;
  managementimg3:any;
  managementimg4:any;
  teamimg:any;
  featuredHomes : any;
  homeCount : any;
  ctaHeading: any;
  ctaDescription: any;
  ctaButtonUrl: any;
  ctaButtonText: any;
  imageBackground: any;
  submitted = false;
  info: any = { firstname: '', lastname: '', phone:'', email:''};
  genericInfo:any;
  constructor(private apiService: ApiService, private router: Router, private segment: SegmentService) {}

  ngOnInit() {
      
      window.scrollTo(0, 0);
      this.segment.page().then(() => console.log("Event sended"));
      this.getGenericInfopack();
     //fetching the list of featured homes
      this.apiService.get('/home_for_sales/featured_home').subscribe((res:any)=>{
          this.featuredHomes = res.homes;
          $.getScript('js/customSlick.js');
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
 
    
    let that= this;

      //standard CTA
         $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5jeApqe6NiM6O2ugMQouQo?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
            function(data, status){
            that.chatData = data.fields;
            that.standardCtaInfoPackDescription = data.fields.standardCtaInfoPackDescription;
            that.standardCtaInfoPackButtonText = data.fields.standardCtaInfoPackButtonText;
            that.standardCtaInfoPackAfterButtonText = data.fields.standardCtaInfoPackAfterButtonText;
          })

            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/4KY0JTdHeg8K2OwUocUYWs?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        that.ctaHeading = data.fields.ctaHeading;
        that.ctaDescription = data.fields.ctaDescription;
        that.ctaButtonUrl = data.fields.ctaButtonUrl;
        that.ctaButtonText = data.fields.ctaButtonText;
 
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.imageBackground.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
          console.log(data);
           that.imageBackground= data.fields.file.url;
        });
      })

     // Our Team heroheading
     $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/4C5dMcRcxawKycsymqcesG?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        that.ourteamHerohead = data.fields.heroHeading;
        that.ourteamHerotext = data.fields.heroText;
        // that.ourteamHerohead = data.fields;
         $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.Fullwidthbackgroundimage.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
              function(data,status){
            
              console.log(data);
              that.bgimg= data.fields.file.url;

              });
        
      })
             // Board of directors
         $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/69tq9IrCIEyQqyigoqcyOw?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
          function(data, status){
            that.ourTeamDirectorHeading = data.fields.ourTeamDirectorHeading;
            that.directorTitle1 = data.fields.directorTitle1;
            that.directorTitle2 = data.fields.directorTitle2;
            that.directorTitle3 = data.fields.directorTitle3;
            that.directorTitle4 = data.fields.directorTitle4;
            that.directorTitle5 = data.fields.directorTitle5;
            that.directorDesignation1 = data.fields.directorDesignation1;
            that.directorDesignation2 = data.fields.directorDesignation2;
            that.directorDesignation3 = data.fields.directorDesignation3;
            that.directorDesignation4 = data.fields.directorDesignation4;
            that.directorDesignation5 = data.fields.directorDesignation5;
            that.directorDescription1 = data.fields.directorDescription1;
            that.directorDescription2 = data.fields.directorDescription2;
            that.directorDescription3 = data.fields.directorDescription3;
            that.directorDescription4 = data.fields.directorDescription4;
            that.directorDescription5 = data.fields.directorDescription5;
             $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.directorFeatureImage1.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
                  function(data,status){
                
                  console.log(data);
                  that.directorimg1= data.fields.file.url;

                  });

                     $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.directorFeatureImage2.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
                  function(data,status){
                
                  console.log(data);
                  that.directorimg2= data.fields.file.url;

                  });

                      $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.directorFeatureImage3.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
                  function(data,status){
                
                  console.log(data);
                  that.directorimg3= data.fields.file.url;

                  });

                      $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.directorFeatureImage4.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
                  function(data,status){
                
                  console.log(data);
                  that.directorimg4= data.fields.file.url;

                  });


                      $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.directorFeatureImage5.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
                  function(data,status){
                
                  console.log(data);
                  that.directorimg5= data.fields.file.url;

                  });
            
          })

              // Our Management
             $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/64oiBjEC2cKkkoAaSg4cO2?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
              function(data, status){
                that.teamManagement = data.fields;
                that.managementHeading = data.fields.managementHeading;
                that.managementTitle1 = data.fields.managementTitle1;
                that.managementTitle2 = data.fields.managementTitle2;
                that.managementTitle3 = data.fields.managementTitle3;
                that.managementTitle4 = data.fields.managementTitle4;
                that.managementDesignation1 = data.fields.managementDesignation1;
                that.managementDesignation2 = data.fields.managementDesignation2;
                that.managementDesignation3 = data.fields.managementDesignation3;
                that.managementDesignation4 = data.fields.managementDesignation4;
                that.managementDescription2 = data.fields.managementDescription2;
                that.managementDescription3 = data.fields.managementDescription3;
                that.managementDescription4 = data.fields.managementDescription4;
                that.managementDescription1 = data.fields.managementDescription1;
        

                     $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.managementFeatureImage1.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
                  function(data,status){
                
                  console.log(data);
                  that.managementimg1= data.fields.file.url;

                  });

                     $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.managementFeatureImage2.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
                  function(data,status){
                
                  console.log(data);
                  that.managementimg2= data.fields.file.url;

                  });

                     $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.managementFeatureImage3.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
                  function(data,status){
                
                  console.log(data);
                  that.managementimg3= data.fields.file.url;

                  });

                     $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.managementFeatureImage4.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
                  function(data,status){
                
                  console.log(data);
                  that.managementimg4= data.fields.file.url;

                  });

                      $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.managementRightImage.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
                  function(data,status){
                
                  console.log(data);
                  that.teamimg= data.fields.file.url;

                  });
            
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
