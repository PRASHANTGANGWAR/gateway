import { Component, OnInit } from '@angular/core';
import { ApiService,SharedService } from '../shared';
import { NgForm } from '@angular/forms';
import { SegmentService } from 'ngx-segment-analytics';
import { Router,ActivatedRoute } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  started1 : any = {};
  started2 : any;
  started3 : any;
  startedimg1 : any;
  startedimg2 : any;
  startedimg3 : any;
  image1 : any;
  image2: any;
  image3 : any;
  image4 : any;
  image5: any;
  image6 : any;
  image7 : any;
  image8: any;
  videoimage1:any;
  videoimage2:any;
  videoimage3:any;
  videoimage4:any;
  discover:any = {};
  chatData : any = {};
  howwork : any={};
  values:any = {};
  bgimg : any;
  submitted = false;
  info: any = { firstname: '', lastname: '', phone:'', email:''};
  genericInfo:any;
  constructor(private apiService: ApiService, private router: Router, private segment: SegmentService) { }

  ngOnInit() {

    $(".nav-v2.innerpage-header").show();
  $(".nav-v2.home-header").hide();
  $(".nav-v2.innerpage-header").addClass('globalNav');
  $(".nav-v2.home-header").removeClass('globalNav');
  
    window.scrollTo(0, 0);
    this.segment.page().then(() => console.log("Event sended"));
    this.getGenericInfopack();

     let that = this;

    //CTA chat

       $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5jeApqe6NiM6O2ugMQouQo?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        that.chatData = data.fields;
      })

   // how we started
           $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/47kSDBgP8skQCE6gksIyCm?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        that.started1 = data.fields;

        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["showcaseImageTitleMedia"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
        function(data,status){
          that.startedimg1= data.fields.file.url;
        });

        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["showcaseImage2"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
        function(data,status){
          that.startedimg2= data.fields.file.url;
        });

        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["showcaseImage3"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
        function(data,status){
          that.startedimg3= data.fields.file.url;
        });
        
      })

     //About us
     $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/3V6Lb3JXkk0gA8MACsiesk?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        that.howwork = data.fields;
          $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.Fullwidthbackgroundimage.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
              function(data,status){
              that.bgimg= data.fields.file.url;
          });
      })



     // Our values
     $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/2zecbysV9yEISmYWYiSMAK?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        that.values = data.fields;
         
          $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["icon1"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
      function(data,status){
        that.image1= data.fields.file.url;
      });

          $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["icon2"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
      function(data,status){
        that.image2= data.fields.file.url;
      });

         $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["icon3"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
      function(data,status){
        that.image3= data.fields.file.url;
      });

         $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["icon4"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
      function(data,status){
        console.log(data);
        that.image4= data.fields.file.url;
      });

        
       $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["icon5"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
      function(data,status){
        that.image5= data.fields.file.url;
      });
      
       $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["icon6"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
      function(data,status){
        that.image6= data.fields.file.url;
      });


         $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["icon7"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
      function(data,status){
        that.image7= data.fields.file.url;
      });
       $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["icon8"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
      function(data,status){
        that.image8= data.fields.file.url;
      });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.Fullwidthbackgroundimage.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
        function(data,status){
          that.bgimg= data.fields.file.url;
        });
      })
          // discover a new lifestyle

               $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/3NEHHnI8BqUY0koaiGQ4SQ?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
			      function(data, status){
            data.fields.smallVideoBlock1YoutubeLinkId = data.fields.smallVideoBlock1YoutubeLink.replace("https://youtu.be/", "");
            data.fields.smallVideoBlock2YoutubeLinkId = data.fields.smallVideoBlock2YoutubeLink.replace("https://youtu.be/", "");
            data.fields.largeVideoBlock1YoutubeLinkId = data.fields.largeVideoBlock1YoutubeLink.replace("https://youtu.be/", "");
            data.fields.largeVideoBlock2YoutubeLinkId = data.fields.largeVideoBlock2YoutubeLink.replace("https://youtu.be/", "");
			      that.discover=data.fields;
               $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["largeVideoBlock1Image"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
					  function(data,status){
					    that.videoimage1= data.fields.file.url;
					  });

					    $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["largeVideoBlock2Image"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
					  function(data,status){
					    that.videoimage2= data.fields.file.url;
					  });

					    $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["smallVideoBlock1Image"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
					  function(data,status){
					    that.videoimage3= data.fields.file.url;
					  });

					    $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields["smallVideoBlock2Image"].sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
					  function(data,status){
					    that.videoimage4= data.fields.file.url;
              $.getScript('js/modal-video.js');
              $.getScript('js/customCarousel.js');
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

}
