import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared';
import { NgForm } from '@angular/forms';
import { SegmentService } from 'ngx-segment-analytics';

declare var $:any;
@Component({
  selector: 'events-page',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {
	isDataAvailable:boolean = false;
	events:any;
  filter:string='';
  key: string = 'start_time'; //set default
  reverse: boolean = false;
  states: any = ['new south wales','queensland','victoria'];
  originalLength:any;
  submitted = false;
  info: any = { firstname: '', lastname: '', phone:'', email:''};
  genericInfo:any;

  constructor(private router: Router,private apiService: ApiService, private segment: SegmentService) { }

  ngOnInit() {

    $(".nav-v2.innerpage-header").show();
  $(".nav-v2.home-header").hide();
  $(".nav-v2.innerpage-header").addClass('globalNav');
  $(".nav-v2.home-header").removeClass('globalNav');

    window.scrollTo(0, 0);
    this.segment.page().then(() => console.log("Event sended"));
  	this.apiService.getEventsList('/events').subscribe(res=>{
        console.log(res);
        this.isDataAvailable = true;
        this.events = res.events;
        this.originalLength = res.events.length;
        let startTime:any;
        let endTime:any;
        let new_start_time:any;
        let new_end_time:any;
        for(var i=0;i<this.events.length;i++){
          if(this.events[i].name){
            this.events[i].orderby_name = this.events[i].name.toLowerCase();
          }
          if(this.events[i].state){
            this.events[i].state = this.events[i].state.toLowerCase();
          }
          startTime = new Date(this.events[i].start_time);
          endTime = new Date(this.events[i].end_time);
          new_start_time = new Date(startTime.getUTCFullYear(), startTime.getUTCMonth(), startTime.getUTCDate(),  startTime.getUTCHours(), startTime.getUTCMinutes(), startTime.getUTCSeconds());
          new_end_time = new Date(endTime.getUTCFullYear(), endTime.getUTCMonth(), endTime.getUTCDate(),  endTime.getUTCHours(), endTime.getUTCMinutes(), endTime.getUTCSeconds());
          let _date = new Date(this.events[i].start_time).toUTCString();
          let event_date = _date.substring(5,16);
          this.events[i]["event_date"] = event_date;
          this.events[i]["new_start_time"] = new_start_time;
          this.events[i]["new_end_time"] = new_end_time;
        }
        window.localStorage.setItem('events',JSON.stringify(this.events));
        this.geoLocation("1");
        this.getGenericInfopack();
      },err=>{
        console.log(err);
    });
  }

    geoLocation(key:any){
    this.events = JSON.parse(window.localStorage.getItem('events'));
    var that = this;
    if(this.events.length){
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                  var pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                };
                for (var i=0;i<that.events.length;i++){
                  that.events[i].distance = that.calculateDistance(that.events[i].latitude,pos.lat,that.events[i].longitude,pos.lng);
                }
                window.localStorage.setItem('events',JSON.stringify(that.events));
                if(key == 'distance'){
                    that.key = key;
                    that.reverse = !that.reverse;
                }
              }, function() {

              });
          }
       }
  }

  calculateDistance(lat1:number,lat2:number,long1:number,long2:number){
    let p = 0.017453292519943295;    // Math.PI / 180
    let c = Math.cos;
    let a = 0.5 - c((lat1-lat2) * p) / 2 + c(lat2 * p) *c((lat1) * p) * (1 - c(((long1- long2) * p))) / 2;
    let dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
    return dis;
  }


  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

   gotoPage(id:number){
   		this.router.navigateByUrl('/events/' + id);
  	}

  getEventsList(value:string){
    if((this.states).indexOf(value) == -1){
      this.states.push(value);
    } else{
      (this.states).splice((this.states).indexOf(value),1);
    }
    if(this.states.length==0){
        this.events = JSON.parse(window.localStorage.getItem('events'));
    }else{
     this.events=[];
     let eventsData = JSON.parse(window.localStorage.getItem('events'));
     for(var i=0;i<eventsData.length;i++){
       if((this.states).indexOf(eventsData[i].state.toLowerCase()) != -1){
        this.events.push(eventsData[i]);
       }
     }
    }          
  }

    getGenericInfopack(){
      this.apiService.get('/pdf_info_packs/featured_pack').subscribe((res:any)=>{
       this.genericInfo = res; 
        window.localStorage.setItem('generic_url',this.genericInfo.info_pack.info_pdf.url);
      });
    }

    getInfo(form: NgForm){
      this.submitted = true;
      if (form.valid) {
        let userData:any = {};
        userData.firstname = this.info.firstname;
        userData.lastname = this.info.lastname;
        userData.plan = this.info.plan;
        userData.phone = this.info.phone;
        userData.email = this.info.email;
        userData.description = this.info.area;
        window.localStorage.setItem('generic_data',JSON.stringify(userData));
        console.log('success!');
         this.segment.track('GetInfoPack',{
         firstname: this.info.firstname,
         lastname: this.info.lastname,
         plan: this.info.plan,
         phone: this.info.phone,
         email: this.info.email,
         description: this.info.area
        }).then(() => {
            window.localStorage.setItem('genericCheck','1');
            this.router.navigateByUrl('/success');
            $('#get-an-info-pack-modal-static')[0].style.display = 'none';
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
            console.log("Event sended");
          });
      }else{
        console.log('validation failed!');
      }
    }

  changeColor($event){
    $event.target.style.backgroundColor = $event.type=="mouseover" ? '#ffffff': '#105dac';
    $event.target.style.color =  $event.type=="mouseover" ? '#105dac':'#ffffff';
  }

  onHover($event){
    $event.target.style.color = $event.type=="mouseover" ? '#105dac':'#414952';
  }
}