import { Component, OnInit } from '@angular/core';
import { SegmentService } from 'ngx-segment-analytics';
declare var $: any;

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.css']
})
export class LegalComponent implements OnInit {
terms:any;
termsHeading:any;
  constructor( private segment: SegmentService ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.segment.page().then(() => console.log("Event sended"));
  	$.getScript('js/custom.js');
  	let that = this;
  	$.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/4hfv6OH4AwyeMagS0YckkU?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
     	function(data, status){
     	console.log (data);
     	that.terms=data.fields.privacyPolicyContent;
     	that.termsHeading=data.fields.privacyPolicyHeading;
    });
  }

}
