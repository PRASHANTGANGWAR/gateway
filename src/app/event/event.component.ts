import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService, SharedService } from '../shared';
import { SegmentService } from 'ngx-segment-analytics';

declare var $:any;
@Component({
  selector: 'enquiry-page/:slug',
  templateUrl: './event.component.html'
  })
export class eventComponent implements OnInit {
  enqueryForm: FormGroup;
  isSubmitting = false;
  eventDetail:any={};
  isDataAvailable: boolean=false;
  month:any=["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
  openDays:any ={};
  preLoved:any=[];
  newHomes:any=[];
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private apiService:ApiService,
    private route: ActivatedRoute,
    private segment: SegmentService,
    private sharedService:SharedService
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

    this.route.params.subscribe(params=>{
      window.scrollTo(0, 0);
      this.segment.page().then(() => console.log("Event sended"));
      let slugValue = params['slug'];
      this.apiService.getEventDetail('/events/'+slugValue).subscribe(res=>{
        console.log(res);
        this.isDataAvailable = true;
        this.eventDetail = res;
        //publish event to change the top menu logo name
        let title:any ={};
        title.first_name = this.eventDetail.event_community.first_name;
        title.primary_color = this.eventDetail.event_community.primary_color;
        title.last_name = this.eventDetail.event_community.last_name;
        title.secondary_color = this.eventDetail.event_community.secondary_color;  
        this.sharedService.publishData(title);

        let startTime = new Date(this.eventDetail.start_time);
        let endTime = new Date(this.eventDetail.end_time);
        let new_start_time = new Date(startTime.getUTCFullYear(), startTime.getUTCMonth(), startTime.getUTCDate(),  startTime.getUTCHours(), startTime.getUTCMinutes(), startTime.getUTCSeconds());
        let new_end_time = new Date(endTime.getUTCFullYear(), endTime.getUTCMonth(), endTime.getUTCDate(),  endTime.getUTCHours(), endTime.getUTCMinutes(), endTime.getUTCSeconds());
        let _date = new Date(this.eventDetail.start_time);
          let event_date = _date.getUTCDate();
          let event_month = this.month[_date.getUTCMonth()];
          /*let event_hrs = _date.getUTCHours() > 12 ? _date.getUTCHours()-12:_date.getUTCHours();
          let event_min = _date.getUTCMinutes();*/
          this.eventDetail["event_date"] = event_date;
          this.eventDetail["event_month"] = event_month;
          this.eventDetail["new_start_time"] = new_start_time;
          this.eventDetail["new_end_time"] = new_end_time;
          let ev_date:any;
          let ev_day:any;
          let ev_month:any;
          if(this.eventDetail.events_in_community.length){
            for(var i=0;i<this.eventDetail.events_in_community.length;i++){
              ev_date = new Date(this.eventDetail.events_in_community[i].start_time);
              ev_day = ev_date.getUTCDate();
              ev_month = this.month[ev_date.getUTCMonth()];
              this.eventDetail.events_in_community[i]["ev_day"]= ev_day;
              this.eventDetail.events_in_community[i]["ev_month"]= ev_month;
            }
          }

          if(this.eventDetail.community_homes.length){
            this.eventDetail.community_homes.forEach(home => {
               if(home.record_type=="Pre-loved"){
                   this.preLoved.push(home);
               }
               else if(home.record_type=="New"){
                   this.newHomes.push(home);
               }
            });
          }
          $.getScript('js/customSlick.js');
      },err=>{
        console.log(err);
      });
    });
  }


  ngOnDestroy() { 
      let headerTitle:any={first_name:'Gateway',primary_color:'#003C6B',last_name:'Lifestyle',secondary_color:'#62717f'};
      this.sharedService.publishData(headerTitle);
  }

 /* getLinkedCommunity(){
    let data = {"community": { "short_name" : "grafton"}};
    this.apiService.post('/communities/find_community',data).subscribe(result=>{
      this.openDays = result;
      if(this.openDays.events.length){
        let event_date:any;
        let day:any;
        let mon:any;
        for(var i=0;i<this.openDays.events.length;i++){
          event_date = new Date(this.openDays.events[i].start_time);
          day = event_date.getUTCDate();
          mon = this.month[event_date.getUTCMonth()];
          this.openDays.events[i]["day"]= day;
          this.openDays.events[i]["month"]= mon;
        }
      }
    });
  }*/

  eventUrl()
  {
    window.open(this.eventDetail.event_url, "_blank");
  }

  goToCommunity(community_name:string){
    this.router.navigateByUrl('/community/' + community_name);
  }

  changeColor($event){
    $event.target.style.backgroundColor = $event.type=="mouseover" ? '#ffffff' : this.eventDetail.event_community.primary_color;
    $event.target.style.color =  $event.type=="mouseover" ? this.eventDetail.event_community.primary_color :'#ffffff';
  }

  changeRsvp($event){
    $event.target.style.backgroundColor = $event.type=="mouseover" ? this.eventDetail.event_community.primary_color : '#ffffff';
    $event.target.style.color =  $event.type=="mouseover" ? '#ffffff':this.eventDetail.event_community.primary_color;
  }

  onHover($event){
    $event.target.style.color =  $event.type=="mouseover" ? this.eventDetail.event_community.primary_color:'#414952';
  }

  after($event){
    $event.target.style.color = $event.type=="mouseover" ? this.eventDetail.event_community.primary_color:'#414952';
    $event.target.getElementsByTagName('div')[0].style.background = $event.type=="mouseover" ? this.eventDetail.event_community.primary_color:'none';
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