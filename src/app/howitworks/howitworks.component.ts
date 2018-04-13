import { Component, OnInit } from '@angular/core';
import { ApiService,SharedService } from '../shared';
import { NgForm } from '@angular/forms';
import { SegmentService } from 'ngx-segment-analytics';
import { Router,ActivatedRoute } from '@angular/router';


declare var $: any;
@Component({
  selector: 'app-howitworks',
  templateUrl: './howitworks.component.html',
  styleUrls: ['./howitworks.component.css']
})
export class HowitworksComponent implements OnInit {
	faqTitle:any = [];
	steps:any=[];
  imageId:any;
	howItWorksHeading:any={};
	showData:boolean = false;
	chatData : any;
  image1 : any;
  image2: any;
  image3 : any;
  pdf : any;
  pdf1 : any;
  pdf2 : any;
  pdf3 : any ;
  mediatext1 : any;
  mediatext2:any;
  mediatext3:any;
  howwork : any;
  bgimg : any;
  video1 : any;
  video : any;
  video_url :any;
  blue_cta : any;
  standardCtaInfoPackDescription: any;
  standardCtaInfoPackButtonText: any;
  standardCtaInfoPackAfterButtonText: any;
  cost : any;
  why_smart : any;
  blue_gradient : any;
  started1 : any;

  startedimg1 : any;
  startedimg2 : any;
  startedimg3 : any;
  startedimg4 : any;
  img : any;
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
  submitted = false;
  cost1 : any;
  cost2 : any;
  cost3 : any;
  

  info: any = { firstname: '', lastname: '', phone:'', email:''};
  genericInfo:any;
  constructor(private apiService: ApiService, private router: Router, private segment: SegmentService) {}

  ngOnInit() {
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

     let that = this;

     //How secure is my tenure
     $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/2XHeIJcpmEsugKmSEUEE4W?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
     	function(data, status){
        that.faqTitle = data.fields;
      })
      
      that.showData = true;


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
          console.log(data);
           that.blogBackgroundImage1= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.blogBackgroundImage2.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
          console.log(data);
           that.blogBackgroundImage2= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.blogBackgroundImage3.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
          console.log(data);
           that.blogBackgroundImage3= data.fields.file.url;
        });
      })

      //standard CTA
         $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5jeApqe6NiM6O2ugMQouQo?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
        function(data, status){
          that.standardCtaInfoPackDescription = data.fields.standardCtaInfoPackDescription;
          that.standardCtaInfoPackButtonText = data.fields.standardCtaInfoPackButtonText;
          that.standardCtaInfoPackAfterButtonText = data.fields.standardCtaInfoPackAfterButtonText;
        });
      
      //How it work
     $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/1m0fmbTu0AAmoQo6u2qGem?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        that.howwork = data.fields;
          $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.Fullwidthbackgroundimage.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
              function(data,status){
            
              console.log(data);
              that.bgimg= data.fields.file.url;

              });

              $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.downloadpdf.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
              function(data,status){
                console.log(data);
                that.pdf= data.fields.file.url;
              });
      })




      // Three images/pdf   
     $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/4Lvoax98XCEy2GESceswac?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
     	function(data, status){
      	that.howItWorksHeading= data.fields;
        that.mediatext1 = data.fields.downloadPdfText1;
        that.mediatext2 = data.fields.downloadPdfText2;;
        that.mediatext3 = data.fields.downloadPdfText3;;



        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.fullWidthImageBackground.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
              function(data,status){
            
              console.log(data);
              that.imageId= data.fields.file.url;

              });
        $.get("https://cdn.contentful.com/spaces/9VCUAqX5dc0/assets/"+data.fields["videoBackgroundUrl"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
      function(data,status){
        that.video_url= data.fields.file.url;
      });

      $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["icon1"][0].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
      function(data,status){
        console.log(data);
        that.image1= data.fields.file.url;
      });

      $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["icon2"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
      function(data,status){
        console.log(data);
        that.image2= data.fields.file.url;
      });

      $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["icon3"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
      function(data,status){
        console.log(data);
        that.image3= data.fields.file.url;
      });

      $.get("https://cdn.contentful.com/spaces/44NBACEyWc0MKYqeCG0Oy6/assets/"+data.fields["downloadPdf"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
      function(data,status){
        console.log(data);
        that.pdf1= data.fields.file.url;
      });

      $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["downloadPdfMeadi2"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
      function(data,status){
        console.log(data);
        that.pdf2= data.fields.file.url;
   });

      $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["downloadPdfMedia3"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
      function(data,status){
        console.log(data);
        that.pdf3= data.fields.file.url;
      });

      })

     $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5jeApqe6NiM6O2ugMQouQo?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        that.chatData = data.fields;
      })


      // how we started
      $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/3j4bppaZgcWUqkueIoAEcI?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        that.started1 = data.fields;

        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["featureIcon1"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
        function(data,status){
          console.log(data);
          that.startedimg1= data.fields.file.url;
        });

        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["featureIcon2"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
        function(data,status){
          console.log(data);
          that.startedimg2= data.fields.file.url;
        });

        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["featureIcon3"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
        function(data,status){
          console.log(data);
          that.startedimg3= data.fields.file.url;
        });

         $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["featureIcon4"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
        function(data,status){
          console.log(data);
          that.startedimg4= data.fields.file.url;
        });
        
      })

      $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5Z6A0Amf16wycASWKCyGcA?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        that.blue_gradient = data.fields;

        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.leftBackgroundImage.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
           that.img= data.fields.file.url;
        });
      });

      $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/1m3VHXYcTyEWEqqYw8Kiea?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        that.why_smart = data.fields;
      });

      $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/7gCyVkppjquiwKCYWo0Kes?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        that.cost = data.fields;

        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["headingIcon1"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
        function(data,status){
          console.log(data);
          that.cost1= data.fields.file.url;
        });

        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["headingIcon2"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
        function(data,status){
          console.log(data);
          that.cost2= data.fields.file.url;
        });

        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["headingIcon3"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
        function(data,status){
          console.log(data);
          that.cost3= data.fields.file.url;
        });

      });

      $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5jeApqe6NiM6O2ugMQouQo?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        that.blue_cta = data.fields;
      });

      $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5pnmAVNOZUgM4460QAeqiw?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        that.video = data.fields;
      });

      $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5pnmAVNOZUgM4460QAeqiw?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        that.video1=data.fields;
        $.getScript('js/modal-video.js');
        $.getScript('js/jquery.tubular.1.0.js');
        $.getScript("js/customCarousel.js");
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
