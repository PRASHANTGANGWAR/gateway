import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared';
import { NgForm } from '@angular/forms';
import { SegmentService } from 'ngx-segment-analytics';

declare var $:any;
@Component({
  selector: 'home-for-sale',
  templateUrl: './homeforsale.component.html',
  styleUrls:['./homeforsale.component.css']
})


export class homeForSalescomponent implements OnInit { 
  homeForSales:any=[];
  filter:string='';
  states: any = ['nsw','qld','vic'];
  new_homes:boolean = false;
  key: string = 'list_price'; //set default
  reverse: boolean = false;
  originalLength:any;
  submitted = false;
  info: any = { firstname: '', lastname: '', phone:'', email:''};
  genericInfo:any;
  new_homes_list: any=[];
constructor(
  private router: Router,
  private apiService:ApiService,
  private segment: SegmentService
  ){}

	ngOnInit() {
    window.scrollTo(0, 0);
     this.segment.page().then(() => console.log("Event sended"));
     this.apiService.getHomesList('/home_for_sales').subscribe((res:any)=>{
        this.homeForSales = res.home_for_sale;
        // Creating a new list for New homes only
        for(var i=0;i<this.homeForSales.length;i++){
           if(this.homeForSales[i].record_type == "New"){     
              this.homeForSales[i].com_name = this.homeForSales[i].community.first_name;
              this.new_homes_list.push(this.homeForSales[i]); 
           }
        }
        this.homeForSales = this.new_homes_list;
        this.originalLength = this.homeForSales.length;
        window.localStorage.setItem('home_sale_list',JSON.stringify(this.new_homes_list));
         this.geoLocation("1");
         this.getGenericInfopack();
      },err=>{
          console.log(err);
      });

  }

  sort(key){
    this.key = key;
    if(key == "distance"){
      this.reverse = !this.reverse;
    }
    this.reverse = !this.reverse;    
  }

    geoLocation(key:any){
    var that = this;
    if(this.homeForSales.length){
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                  var pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                };
                for (var i=0;i<that.homeForSales.length;i++){
                  that.homeForSales[i].distance = that.calculateDistance(that.homeForSales[i].community.latitude,pos.lat,that.homeForSales[i].community.longitude,pos.lng);
                }
                window.localStorage.setItem('home_sale_list',JSON.stringify(that.homeForSales));
                if(key == 'distance'){
                    that.key = key;
                    that.reverse = !that.reverse;
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

  getHomesList(value:string){
    if((this.states).indexOf(value) == -1){
      this.states.push(value);
    } else{
      (this.states).splice((this.states).indexOf(value),1);
    }
    this.checkFilters();         
  }

  showNewOnly(){
    this.new_homes = this.new_homes == true ? false : true;
    this.checkFilters();
  }

  checkFilters(){
    if(this.states.length != 0){
      this.homeForSales=[];
     let homesData = JSON.parse(window.localStorage.getItem('home_sale_list'));
     for(var i=0;i<homesData.length;i++){
       if(this.new_homes){
        if((this.states).indexOf(homesData[i].state.toLowerCase()) != -1 && homesData[i].record_type == "New"){
            this.homeForSales.push(homesData[i]);
        }
      }else{
        if((this.states).indexOf(homesData[i].state.toLowerCase()) != -1){
            this.homeForSales.push(homesData[i]);
        }
      }
     }
    } else{
      this.homeForSales = [];
      let homesData = JSON.parse(window.localStorage.getItem('home_sale_list'));
      if(!this.new_homes){
        this.homeForSales=homesData;
      }
      else{
        for(var i=0;i<homesData.length;i++){
         if(homesData[i].record_type == "New"){
          this.homeForSales.push(homesData[i]);
         }
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