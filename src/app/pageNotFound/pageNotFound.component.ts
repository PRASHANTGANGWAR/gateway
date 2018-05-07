import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'page-not-found',
  templateUrl: './pageNotFound.component.html'
})
export class pageNotFoundcomponent implements OnInit { 
  authType: String = '';
  title: String = '';
  isSubmitting = false;
constructor(
  private router: Router
  ){}
	ngOnInit() {

	$(".nav-v2.innerpage-header").show();
	  $(".nav-v2.home-header").hide();
	  $(".nav-v2.innerpage-header").addClass('globalNav');
	  $(".nav-v2.home-header").removeClass('globalNav');

   
  }
}