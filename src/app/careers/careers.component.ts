import { Component, OnInit } from '@angular/core';
import { SegmentService } from 'ngx-segment-analytics';
declare var $: any;

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
showData:boolean = false;
bgimg : any;
image1 : any;
image2: any;
image3 : any;
image4 : any;
image5: any;
image6 : any;
image7 : any;
image8: any;
video1: any = {};
video1url: any;
ourValues:any={};
careers:any={};

careersCTA:any={};

  constructor( private segment: SegmentService) { }

  ngOnInit() {

  $(".nav-v2.innerpage-header").show();
  $(".nav-v2.home-header").hide();
  $(".nav-v2.innerpage-header").addClass('globalNav');
  $(".nav-v2.home-header").removeClass('globalNav');

    window.scrollTo(0, 0);
    this.segment.page().then(() => console.log("Event sended"));
     let that = this;
     $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/5HrgsmbdNCOMwMk8KmAAye?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
     	function(data, status){
     	that.careers=data.fields;
     		$.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.Fullwidthbackgroundimage.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
              function(data,status){
              that.bgimg= data.fields.file.url;
              });
         })
         that.showData = true;

      $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/2zecbysV9yEISmYWYiSMAK?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        that.ourValues=data.fields;
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.icon1.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
          that.image1= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.icon2.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
          that.image2= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.icon3.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
          that.image3= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.icon4.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
          that.image4= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.icon5.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
          that.image5= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.icon6.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
          that.image6= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.icon7.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
          that.image7= data.fields.file.url;
        });
        $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+data.fields.icon8.sys.id+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
          function(data,status){
          that.image8= data.fields.file.url;
        });
      })

      $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/pUbvdX7HvU4gWUckWQq04?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
      function(data, status){
        that.video1=data.fields;
        $.getScript('js/modal-video.js');
        $.getScript('js/jquery.tubular.1.0.js');
        $.getScript("js/customCarousel.js");
         $.getScript('js/custom.js');
      })

          
     $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/3TGc10BLDW2SuAg4a0CAos?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
     	function(data, status){
       	that.careersCTA=data.fields
      })
  }

}
