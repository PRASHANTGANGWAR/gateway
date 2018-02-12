import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SegmentService } from 'ngx-segment-analytics';


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