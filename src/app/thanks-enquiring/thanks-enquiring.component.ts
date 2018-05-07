import { Component, OnInit } from '@angular/core';
import { SegmentService } from 'ngx-segment-analytics';
declare var $: any;

@Component({
  selector: 'app-thanks-enquiring',
  templateUrl: './thanks-enquiring.component.html',
  styleUrls: ['./thanks-enquiring.component.css']
})
export class ThanksEnquiringComponent implements OnInit {
	infoUrl:any;  

  constructor(private segment: SegmentService) { }

  ngOnInit() {

  $(".nav-v2.innerpage-header").show();
  $(".nav-v2.home-header").hide();
  $(".nav-v2.innerpage-header").addClass('globalNav');
  $(".nav-v2.home-header").removeClass('globalNav');

  	window.scrollTo(0, 0);
    this.segment.page().then(() => console.log("Event sended"));
  	if(window.localStorage.getItem('genericCheck')=='0'){
  		this.infoUrl = 'https://www.admin.gatewaylifestyle.com.au'+window.localStorage.getItem('basicinfo_url');
  	}
  	else if(window.localStorage.getItem('genericCheck')=='1'){
  		this.infoUrl = 'https://www.admin.gatewaylifestyle.com.au'+window.localStorage.getItem('generic_url');
  	}
  }

}
