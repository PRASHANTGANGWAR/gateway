import { Component, OnInit } from '@angular/core';
import { SegmentService } from 'ngx-segment-analytics';
declare var $: any;

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {
	privacyContent:any;
	privacyPolicyHeading:any;
	subContents:any;
  constructor( private segment: SegmentService) { }

  ngOnInit() {

    $(".nav-v2.innerpage-header").show();
    $(".nav-v2.home-header").hide();
    $(".nav-v2.innerpage-header").addClass('globalNav');
    $(".nav-v2.home-header").removeClass('globalNav');


    window.scrollTo(0, 0);
    this.segment.page().then(() => console.log("Event sended"));
  	$.getScript('js/custom.js');
  	let that = this;
  	$.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/2sm1KR6nAAIWOcseEu8YwW?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
     	function(data, status){
     	console.log (data);
     	that.privacyContent=data.fields.privacyPolicyContent;
     	that.privacyPolicyHeading=data.fields.privacyPolicyHeading;
    });
    
  }

}
