import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	
	$(".nav-v2.innerpage-header").show();
	$(".nav-v2.home-header").hide();
	$(".nav-v2.innerpage-header").addClass('globalNav');
	$(".nav-v2.home-header").removeClass('globalNav');

  	window.scrollTo(0, 0);
  }

}
