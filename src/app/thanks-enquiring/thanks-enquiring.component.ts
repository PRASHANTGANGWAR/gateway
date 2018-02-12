import { Component, OnInit } from '@angular/core';
import { SegmentService } from 'ngx-segment-analytics';

@Component({
  selector: 'app-thanks-enquiring',
  templateUrl: './thanks-enquiring.component.html',
  styleUrls: ['./thanks-enquiring.component.css']
})
export class ThanksEnquiringComponent implements OnInit {
	infoUrl:any;  

  constructor(private segment: SegmentService) { }

  ngOnInit() {
  	window.scrollTo(0, 0);
    this.segment.page().then(() => console.log("Event sended"));
  	if(window.localStorage.getItem('genericCheck')=='0'){
  		this.infoUrl = 'http://www.admin.gatewaylifestyle.com.au'+window.localStorage.getItem('basicinfo_url');
  	}
  	else if(window.localStorage.getItem('genericCheck')=='1'){
  		this.infoUrl = 'http://www.admin.gatewaylifestyle.com.au'+window.localStorage.getItem('generic_url');
  	}
  }

}
