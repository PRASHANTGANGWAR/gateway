import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

   
  }
}