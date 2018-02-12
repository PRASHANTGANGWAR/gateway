import { Component, OnInit } from '@angular/core';
import { ApiService,SharedService } from '../shared';
import { NgForm } from '@angular/forms';
import { SegmentService } from 'ngx-segment-analytics';
import { Router,ActivatedRoute } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {
	heroheading:any = [];
  steps:any=[];
  bitmapIcon:any;
  imageId:any;
  res:any;
  howItWorksHeading:any={};
  backgroundImage:any={};
	showData:boolean = false;
  submitted = false;
  info: any = { firstname: '', lastname: '', phone:'', email:''};
  genericInfo:any;
  constructor(private apiService: ApiService, private router: Router, private segment: SegmentService) {}

  howworkHeroheading:any;
  howworkHerotext:any;
  bgimg:any;
  howworkpdf : any;
  image1 : any;
  image2: any;
  image3: any;
  chatData : any = {};
  featuredHomes : any;
  isDataAvailable: boolean = false;
  homeCount : any;
  blogLink1: any;
  blogLink2: any;
  blogLink3: any;
  blogTitle1: any;
  blogTitle2: any;
  blogTitle3: any;
  exploreMoreButton: any;
  ourBlogsDescription: any;
  ourBlogsTitle: any;
  blogBackgroundImage1: any;
  blogBackgroundImage2: any;
  blogBackgroundImage3: any;
  standardCtaInfoPackDescription: any;
  standardCtaInfoPackButtonText: any;
  standardCtaInfoPackAfterButtonText: any;
  ngOnInit() {
    window.scrollTo(0, 0);
    this.segment.page().then(() => console.log("Event sended"));
    this.getGenericInfopack();
    let that = this;


    //fetching the list of featured homes
      this.apiService.get('/home_for_sales/featured_home').subscribe((res:any)=>{
          this.isDataAvailable = true;
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

      $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/10h4Zli6MwKKQOuya0smM2?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        that.blogLink1 = data.fields.blogLink1;
        that.blogLink2 = data.fields.blogLink2;
        that.blogLink3 = data.fields.blogLink3;
        that.blogTitle1 = data.fields.blogTitle1;
        that.blogTitle2 = data.fields.blogTitle2;
        that.blogTitle3 = data.fields.blogTitle3;
        that.exploreMoreButton = data.fields.exploreMoreButton;
        that.ourBlogsDescription = data.fields.ourBlogsDescription;
        that.ourBlogsTitle = data.fields.ourBlogsTitle;
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.blogBackgroundImage1.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
           that.blogBackgroundImage1= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.blogBackgroundImage2.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
           that.blogBackgroundImage2= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.blogBackgroundImage3.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
           that.blogBackgroundImage3= data.fields.file.url;
        });
      })

    $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5jeApqe6NiM6O2ugMQouQo?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        that.standardCtaInfoPackDescription = data.fields.standardCtaInfoPackDescription;
        that.standardCtaInfoPackButtonText = data.fields.standardCtaInfoPackButtonText;
        that.standardCtaInfoPackAfterButtonText = data.fields.standardCtaInfoPackAfterButtonText;
      })

     //How it work
     $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/6bvyAwb7hemaakY808u0YO?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        that.howworkHeroheading = data.fields.heroheading;
        that.howworkHerotext = data.fields.Herotext;
          $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.Fullwidthbackgroundimage.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
              function(data,status){
            
              that.bgimg= data.fields.file.url;

              });
          $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.downloadpdf.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
              function(data,status){
            
              that.howworkpdf= data.fields.file.url;

              });
      })


     $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/53s8poBY8oyMeA86qqGaEI?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
     	function(data, status){
     		for (var i = 1; i <= Object.keys(data.fields).length/2; ++i) {
    			that.heroheading.push({'Question': data.fields["faqTitle" + i],
    				'Description': data.fields["faqDescription" + i]}); 
    		}

         })
         that.showData = true;

           

   /*  $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/1F0bexMbKcmkaOkEW4UEIg?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
      that.howItWorksHeading= data.fields;

      for(var i=1; i<=Object.keys(data).length+1;++i){
        that.steps.push({'Heading': data.fields["howItWorksHeadingBold" + i],
              'Description': data.fields["description" + i]})
        }



        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.fullWidthImageBackground.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
              function(data,status){
            
              that.imageId= data.fields.file.url;

              });

    })*/


    // Three images/pdf   
     $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/1F0bexMbKcmkaOkEW4UEIg?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        that.howItWorksHeading= data.fields;

        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.fullWidthImageBackground.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
              function(data,status){
            
              that.imageId= data.fields.file.url;

              });

      $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["howItWorksIcon1"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
      function(data,status){
        that.image1= data.fields.file.url;
      });

      $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["howItWorksIcon2"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
      function(data,status){
        that.image2= data.fields.file.url;
      });

      $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["howItWorksIcon3"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
      function(data,status){
        that.image3= data.fields.file.url;
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


