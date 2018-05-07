import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SegmentService } from 'ngx-segment-analytics';
declare var $: any;

@Component({
  selector: 'enquiry-page',
  templateUrl: './enquiry.component.html'
})
export class enquiryComponent implements OnInit {
      enqueryForm: FormGroup;
      isSubmitting = false;
	constructor(
    private router: Router,
    private fb: FormBuilder,
    private segment: SegmentService
  ) {

	this.enqueryForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      postcode: '',
      community:''
    });
     

  }

    ngOnInit(){

      $(".nav-v2.innerpage-header").show();
      $(".nav-v2.home-header").hide();
      $(".nav-v2.innerpage-header").addClass('globalNav');
      $(".nav-v2.home-header").removeClass('globalNav');
      
      window.scrollTo(0, 0);
      this.segment.page().then(() => console.log("Event sended"));
    }
   submitForm(){
   	let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(!(this.enqueryForm.value.firstName && this.enqueryForm.value.lastName)){
    	alert("Name property is missing");
    } 
    else if(!this.enqueryForm.value.email){
        alert("email property is missing");
    } 
    else if(reg.test(this.enqueryForm.value.email) == false){
        alert("email is not valid");
    }
    else if(!this.enqueryForm.value.phone){
        alert("phone property is missing");
    } 
    else if(!this.enqueryForm.value.postcode){
        alert("postcode property is missing");
    }
    else {
     this.isSubmitting = true;
     alert("Enquiry successful accepted");
    }
   }
}