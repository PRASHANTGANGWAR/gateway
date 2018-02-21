import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService,SharedService } from '../shared';
import { NgForm } from '@angular/forms';
import { SegmentService } from 'ngx-segment-analytics';
import * as L from 'mapbox.js';

declare var $: any;
declare var google: any;
@Component({
  selector: 'community-page',
  templateUrl: './communities.component.html'
})
export class communitiesComponent implements OnInit {
  settingsForm: FormGroup;
  errors: Object = {};
  isSubmitting = false;
  communityListing = [];
  communityLists = [];
  filter:string='';
  originalLength:any;
  public newmap=null;
  headerTitle:any={first_name:'logo',primary_color:'#003C6B',last_name:'Lifestyle',secondary_color:'#62717f'};
  //sorting
  key: string = 'orderby_name'; //set default
  reverse: boolean = false;
  isDataAvailable: boolean = false;
  states: any = ['new south wales','queensland','victoria'];
  homes:boolean = false;
  submitted = false;
  info: any = { firstname: '', lastname: '', phone:'', email:''};
  genericInfo:any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private apiService: ApiService,
    private sharedService:SharedService,
    private segment: SegmentService
  ) {
    // create form group using the form builder
    this.settingsForm = this.fb.group({
      image: '',
      username: '',
      bio: '',
      email: '',
      password: ''
    });
    // Optional: subscribe to changes on the form
    // this.settingsForm.valueChanges.subscribe(values => this.updateUser(values));
  }

  sort(key:any){
      this.key = key;
      this.reverse = !this.reverse;
  }

  ngOnInit() {
     $.getScript("js/leaflet.markercluster.js");
     window.scrollTo(0, 0);
     this.sharedService.publishData(this.headerTitle);
     this.segment.page().then(() => console.log("Event sended"));
    //fetching the list of all communities
      this.apiService.getCommunitiesList('/communities').subscribe((res:any)=>{
          this.isDataAvailable = true;
          this.communityListing = res.communities;
          this.originalLength=res.communities.length;
          console.log(this.communityListing);
          for (var i=0;i<this.communityListing.length;i++){
            this.communityListing[i].orderby_name = this.communityListing[i].first_name.toLowerCase();
          }
          window.localStorage.setItem('communityListing',JSON.stringify(this.communityListing));
          this.updateMap();
          this.geoLocation("1");
          this.getGenericInfopack();
        },
        err=>{
          console.log(err);
      });
  }

  handleLocationError(browserHasGeolocation, infoWindow, pos,map) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }

  geoLocation(key:any){
    var that = this;
    if(this.communityListing.length){
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                  var pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                };
                for (var i=0;i<that.communityListing.length;i++){
                  that.communityListing[i].distance = that.calculateDistance(that.communityListing[i].latitude,pos.lat,that.communityListing[i].longitude,pos.lng);
                }
                window.localStorage.setItem('communityListing',JSON.stringify(that.communityListing));
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

  updateMap(){
    var content,marker;
    L.mapbox.accessToken = 'pk.eyJ1Ijoic2VtYWwtemVhbG91cyIsImEiOiJjaWt4bHNoa20wMHp1dWFtM20yZjIzYXg0In0.MkDy4_XRL-MKTWHBh7swDw';   

    var map = L.mapbox.map('map', 'mapbox.streets').setView([-32.105143, 149.209900], 6).on('dblclick', function(e) {
      // Zoom exactly to each double-clicked point
      map.setView(e.latlng, map.getZoom() + 2);
    });
    this.newmap = map;
    if (map.scrollWheelZoom) {
      map.scrollWheelZoom.disable();
    }
    var that = this;
    setTimeout(function(){
      var markers = new L.MarkerClusterGroup();
      var title = '<span>Sussex Inlet</span> by Gateway Lifestyle';
      var link = 'community-detail-page-final.html';

      for (var i = 0; i < that.communityListing.length; i++) {
        content = '<a href= "/community/'+that.communityListing[i].slug+'"><div class="map_image"><div class="img_outer_div"><img src="'+that.communityListing[i].featured_image.url+'"></div><div class="circle-icon"><img src="'+that.communityListing[i].community_icon.url+'" alt=""></div></div><div class="map_title">'+'<span style="color:'+that.communityListing[i].primary_color+'">'+that.communityListing[i].first_name+'</span> '+ that.communityListing[i].last_name+' </div><div class="map_state">'+that.communityListing[i].suburb+', '+that.communityListing[i].state+'</div></a>';
        marker = L.marker(new L.LatLng(that.communityListing[i].latitude,that.communityListing[i].longitude), {
          icon: L.mapbox.marker.icon({'marker-symbol': 'circle','marker-size': 'large', 'marker-color': '#003c6b','title': 'a[2]','background':'#003c6b'}),
        });
          marker.bindPopup(content);
          markers.addLayer(marker);
      }
      map.addLayer(markers);
    },4000)
  }

  newLocation(state:string)
  {
    if(state == "nsw"){
       this.newmap.setView([-33.8642,151.2053],7);
        $("#nsw").addClass('active-map');
        $("#qsl").removeClass('active-map');
        $("#vct").removeClass('active-map');
    }
    else if(state == "qsl"){
      this.newmap.setView([-26.9574,152.9572],7);
      $("#qsl").addClass('active-map');
      $("#nsw").removeClass('active-map');
      $("#vct").removeClass('active-map');
    }
    else if(state == "vct"){
      this.newmap.setView([-37.4713,144.7852],7);
      $("#vct").addClass('active-map');
      $("#nsw").removeClass('active-map');
      $("#qsl").removeClass('active-map');
    }
  }

  gotto(page:string){
    this.router.navigateByUrl('/community/' + page);

  }
  getCommunityList(value:string){
    //reset search
    if((this.states).indexOf(value) == -1){
      this.states.push(value);
    } else{
      (this.states).splice((this.states).indexOf(value),1);
    }
    this.checkFilters();  
  }

  checkitnow(page:string){
    this.router.navigateByUrl('/community/' + page);
    console.log('i am checked');
  }

  /*eventSearch(ev:any){
    console.log(ev);
    let communitiesList = JSON.parse(window.localStorage.getItem('communityListing'));
    this.communityListing = communitiesList;
  }*/

  getHomeForsale(){
    this.communityLists = [];
     for(var i=0;i<this.communityListing.length;i++){
       if(this.communityListing[i].hfs == true){
         this.communityLists.push(this.communityListing[i]);
       }
     }
  }

  showHomes(){
    this.homes=this.homes == true ? false : true;
    this.checkFilters();
  }

  checkFilters(){
    if(this.states.length != 0){
      this.communityListing=[];
     let communitiesData = JSON.parse(window.localStorage.getItem('communityListing'));
     for(var i=0;i<communitiesData.length;i++){
       if(this.homes){
        if((this.states).indexOf(communitiesData[i].state.toLowerCase()) != -1 && communitiesData[i].home_for_sale > 0){
            this.communityListing.push(communitiesData[i]);
        }
      }else{
        if((this.states).indexOf(communitiesData[i].state.toLowerCase()) != -1){
            this.communityListing.push(communitiesData[i]);
        }
      }
     }
    } else{
      this.communityListing = [];
      let communitiesData = JSON.parse(window.localStorage.getItem('communityListing'));
      if(!this.homes){
        this.communityListing=communitiesData;
      }
      else{
        for(var i=0;i<communitiesData.length;i++){
         if(communitiesData[i].home_for_sale > 0){
          this.communityListing.push(communitiesData[i]);
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
