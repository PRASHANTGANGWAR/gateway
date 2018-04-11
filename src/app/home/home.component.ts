import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SegmentService } from 'ngx-segment-analytics';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService,SharedService } from '../shared';

declare var $: any;
declare var google: any;
@Component({
  selector: 'home-page',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  header: any = "";
  headerBelow: any = {};
  image1: any = "";
  image2: any = "";
  image3: any = "";
  image4: any = "";
  icon1: any = "";
  icon2: any = "";
  icon3: any = "";
  icon4: any = "";
  steps: any = "";
  HowIcon1: any = "";
  HowIcon2: any = "";
  HowIcon3: any = "";
  HowIcon4: any = "";
  backimage: any = "";
  testimonialsQuote = "";
  testimonialsQuote2 = "";
  testimonialsQuote3 = "";
  testimonialsQuoteDesc = "";
  testimonialsQuoteDesc2 = "";
  testimonialsQuoteDesc3 = "";
  testimonialsImage: any = "";
  testimonialsImage2: any = "";
  testimonialsImage3: any = "";
  featuredHomes : any;
  homeCount : any;
  featuredComunities: any;
  comunitiesCount: any;
  chatData : any;
  descoverMore : any;
  discoverHeadingBlueBlock: any;
  discoverMoreDescription: any;
  smallVideoBlock1Text: any;
  smallVideoBlock2Text: any;
  largeVideoBlock1Name: any;
  largeVideoBlock1Quote: any;
  largeVideoBlock1YoutubeLink: any;
  largerVideoBlock2Name: any;
  largeVideoBlock2Quote: any;
  largeVideoBlock2YoutubeLink: any;

  Bigvideo1Img: any;
  Bigvideo2Img: any;
  Smallvideo1Img: any;
  Smallvideo2Img: any;

  blue_split : any = {};
  sliderImg1 : any;
  sliderImg2 : any;
  sliderImg3 : any;
  slider1Title: any;
  slider1Description: any;
  slider1ButtonText: any;
  slider2Title: any;
  slider2Description: any;
  slider2ButtonText: any;
  slider3Title: any;
  slider3Description: any;
  slider3ButtonText: any;
  slider1ButtonUrl:any;
  slider2ButtonUrl:any;
  slider3ButtonUrl:any;
  slider4Title: any;
  slider4Description: any;
  slider4ButtonText: any;
  slider4ButtonUrl:any;
  videoImage: any;
  discover: any = {};

   standardCtaInfoPackDescription: any;
   standardCtaInfoPackButtonText: any;
   standardCtaInfoPackAfterButtonText: any;
   bodyClasses:string = "nav-v4";
  submitted = false;
  info: any = { firstname: '', lastname: '', phone:'', email:''};
  genericInfo:any;
 public href: string = "";
  public hr:boolean=false;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private segment: SegmentService ,
    private sharedService: SharedService
  ) {
  }
  tags: Array<string> = [];
  tagsLoaded = false;
  location = {};
  data:any = [];

  ngOnInit() {
    this.sharedService.publishPage("Home");
   
    $('body').addClass(this.bodyClasses);
    $(".nav-v2").hide();
    $(".nav-v4").show();
    $.getScript("js/leaflet.markercluster.js");
    window.scrollTo(0, 0);
    this.segment.page().then(() => console.log("Event sended"));
    this.getGenericInfopack();
       this.apiService.get('/home_for_sales/featured_home').subscribe((res:any)=>{
          this.featuredHomes = res.homes;
        },
        err=>{
          console.log(err);
      });

      //count of homes
      this.apiService.get('/communities/count_for_home_and_community').subscribe((res:any)=>{
          this.homeCount = res.home_count;
          this.comunitiesCount = res.community_count;
        },
        err=>{
          console.log(err);
      });

       this.apiService.get('/communities/featured_community').subscribe((res:any)=>{
          this.featuredComunities = res.communities;
          $.getScript('js/customSlick.js');
        },
        err=>{
          console.log(err);
      });

       $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/3NEHHnI8BqUY0koaiGQ4SQ?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        data.fields.smallVideoBlock1YoutubeLinkId = data.fields.smallVideoBlock1YoutubeLink.replace("https://youtu.be/", "");
        data.fields.smallVideoBlock2YoutubeLinkId = data.fields.smallVideoBlock2YoutubeLink.replace("https://youtu.be/", "");
        data.fields.largeVideoBlock1YoutubeLinkId = data.fields.largeVideoBlock1YoutubeLink.replace("https://youtu.be/", "");
        data.fields.largeVideoBlock2YoutubeLinkId = data.fields.largeVideoBlock2YoutubeLink.replace("https://youtu.be/", "");
        that.discover=data.fields;
        that.discoverHeadingBlueBlock=data.fields.discoverHeadingBlueBlock;
        that.discoverMoreDescription=data.fields.discoverMoreDescription;
        that.smallVideoBlock1Text=data.fields.smallVideoBlock1Text;
        that.smallVideoBlock2Text=data.fields.smallVideoBlock2Text;

        that.largeVideoBlock1Name=data.fields.largeVideoBlock1Name;
        that.largeVideoBlock1Quote=data.fields.largeVideoBlock1Quote;
        that.largeVideoBlock1YoutubeLink=data.fields.largeVideoBlock1YoutubeLink;
        that.largerVideoBlock2Name=data.fields.largerVideoBlock2Name;
        that.largeVideoBlock2Quote=data.fields.largeVideoBlock2Quote;
        that.largeVideoBlock2YoutubeLink=data.fields.largeVideoBlock2YoutubeLink;
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.largeVideoBlock1Image.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
           that.Bigvideo1Img= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.largeVideoBlock2Image.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
           that.Bigvideo2Img= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.smallVideoBlock1Image.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
           that.Smallvideo1Img= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.smallVideoBlock2Image.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
           that.Smallvideo2Img= data.fields.file.url;
        });
      })


       //standard CTA
         $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5jeApqe6NiM6O2ugMQouQo?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
                    function(data, status){
                      that.standardCtaInfoPackDescription = data.fields.standardCtaInfoPackDescription;
                      that.standardCtaInfoPackButtonText = data.fields.standardCtaInfoPackButtonText;
                      that.standardCtaInfoPackAfterButtonText = data.fields.standardCtaInfoPackAfterButtonText;
                    })

      //count of homes
      /*this.apiService.get('/communities/count_for_home_and_community').subscribe((res:any)=>{
          this.comunitiesCount = res.home_count;
        },
        err=>{
          console.log(err);
      });*/

       let that = this;
       $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/1StNUKTcrmOGo4Iyam2U8I?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        that.header=data.fields;
        that.slider1Title = data.fields.slider1Title;
        that.slider1Description = data.fields.slider1Description;
        that.slider1ButtonUrl=data.fields.slider1ButtonUrl;
        that.slider1ButtonText = data.fields.slider1ButtonText;
        that.slider2Title = data.fields.slider2Title;
        that.slider2ButtonUrl=data.fields.slider2ButtonUrl;
        that.slider2Description = data.fields.slider2Description;
        that.slider2ButtonText = data.fields.slider2ButtonText;
        that.slider3Title = data.fields.slider3Title;
        that.slider3ButtonUrl=data.fields.slider3ButtonUrl;
        that.slider3Description = data.fields.slider3Description;
        that.slider3ButtonText = data.fields.slider3ButtonText;
        that.slider4Title = data.fields.slider4Title;
        that.slider4ButtonUrl=data.fields.slider4ButtonUrl;
        that.slider4Description = data.fields.slider4Description;
        that.slider4ButtonText = data.fields.slider4ButtonText;


        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.slider1Image.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
          that.image1= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.slider2Image.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
          that.image2= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.slider2Image.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
          that.image4= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.slider3Image.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
          that.image3= data.fields.file.url;
          $.getScript("js/owl-carouselCustom.js");
        });
      })
      $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5JgGsuP63myKG4o0s00gqk?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        data.fields.youTubeLinkId=data.fields.youTubeLink.replace("https://youtu.be/", "");;
        that.headerBelow=data.fields;
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.videoImagePreview.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
          that.videoImage= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.featureIcon1.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
          that.icon1= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.featureIcon2.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
          that.icon2= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.featureIcon3.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
          that.icon3= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.featureIcon4.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
          that.icon4= data.fields.file.url;
          $.getScript("js/modal-video.js");
          $.getScript('js/customCarousel.js');
        });
        
      })
       $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/1F0bexMbKcmkaOkEW4UEIg?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        that.steps=data.fields;
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.howItWorksIcon1.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
          that.HowIcon1= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.howItWorksIcon2.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
          that.HowIcon2= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.howItWorksIcon3.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
          that.HowIcon3= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.fullWidthImageBackground.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
          that.backimage= data.fields.file.url;
        });
      })

       $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/uJj7daZX20WcmOe2sSGCI?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
          function(data, status){
            that.blue_split=data.fields;
        
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.sliderImage1.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
           that.sliderImg1= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.sliderImage2.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
           that.sliderImg2= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.sliderImage3.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
           that.sliderImg3= data.fields.file.url;
        });
        })

       $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5GSasSCYo0KsSKK8cCmCi6?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        that.testimonialsQuote=data.fields.quote;
        that.testimonialsQuote2=data.fields.quote2;
        that.testimonialsQuote3=data.fields.quote3;
        that.testimonialsQuoteDesc=data.fields.nameAndCommunityLivesIn;
        that.testimonialsQuoteDesc2=data.fields.nameAndCommunityLivesIn2;
        that.testimonialsQuoteDesc3=data.fields.nameAndCommunityLivesIn3;
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.testimonialImage1.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
          that.testimonialsImage= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.testimonialImage2.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
          that.testimonialsImage2= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.testimonialImage3.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
          that.testimonialsImage3= data.fields.file.url;
        });
      });
       
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

  ngOnDestroy() { 
        $('body').removeClass(this.bodyClasses);
        $(".nav-v2").show();
        $(".nav-v4").hide();
        this.sharedService.publishPage("");
    }

}
