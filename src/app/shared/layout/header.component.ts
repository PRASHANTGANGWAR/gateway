import { Component, OnInit } from '@angular/core';
import { ApiService,SharedService } from '../services';
import { NgForm } from '@angular/forms';
import { SegmentService } from 'ngx-segment-analytics';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

declare var $: any;
@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
	homeForSales:any=[];
	communities:any=[];
	events:any=[];
	homesToAdd:any;
	communityToAdd:any;
	eventsToAdd:any;
  communityTitle:any;
  info: any = { firstname: '', lastname: '', phone:'', email:''};
  submitted = false;
  genericInfo:any;
  public href: string = "";
  public hideElement:boolean=false;
 route : any;
  constructor(
    //public nav: NavbarService,
    private router: Router,
  	private apiService : ApiService,
    private segment: SegmentService,
    private sharedService : SharedService,
    private location: Location
  ) {this.getGenericInfopack();



  }

  ngOnInit() {
        $.getScript("js/custom.js");

         // this.nav.show();
         this.sharedService.caseNumber$.subscribe(data=>{
      this.communityTitle = data;
      let generic_data = JSON.parse(window.localStorage.getItem('generic_data'));
      console.log(this.communityTitle,"communityTitle");
    })

    this.sharedService.pageInfo$.subscribe(data=>{
      console.log("page info here"+data)
        this.route = data;
    })
         

  }





  searchHeader(value: string,event:any){
    event.preventDefault();
    $(".hm_search").empty();
    $(".event-search").empty();
    $(".com_search").empty();
    //show loading inside the fields until we get api response
  	$('<li>Loading...</li>').appendTo(".hm_search");
    $('<li>Loading...</li>').appendTo( ".event-search" );
    $('<li>Loading...</li>').appendTo(".com_search");

  	let data = {"search": value};
  	this.apiService.post("/communities/universal_search",data).subscribe(res=>{
    	//hide loading inside the fields
      $(".hm_search").empty();
      $(".event-search").empty();
      $(".com_search").empty();
      console.log(res);
  		this.communities = res.community;
  		this.events = res.events;
  		this.homeForSales= res.home_for_sales;
      //append html inside the respective fileds
  		this.searchEvents();
  		this.searchCommunity();
      this.searchHomes();
  	});
  }


  searchCommunity(){
    if(!this.communities.length){
      $('<li>No result found</li>').appendTo(".com_search");
    }
    else{
  	  for(var i=0;i<this.communities.length;i++){
        if (i === 3) { break; }
  	  	$('<a href= "/community/'+this.communities[i].slug+'">'+'<li>'+'<span>'+'<img src="'+this.communities[i].community_icon.url+'" alt="">'+'</span>'+this.communities[i].first_name+' '+this.communities[i].last_name+'</li>'+'</a>').appendTo(".com_search");
  	  }
    }	
  }

  searchEvents(){
    if(!this.events.length){
      $('<li>No result found</li>').appendTo(".event-search");
    }
    else{
    	for(var i=0;i<this.events.length;i++){
        if (i === 3) { break; }
    		//this.eventsToAdd = '<a href= "/events/'+this.events[i].id+'">'+'<li>'+'<div class="event-search-box">'+'<span>'+this.events[i].start_date+'</span>'+'<span>'+this.events[i].start_month+'</span>'+'</div>'+'<p><strong>'+this.events[i].name+'</strong></p>'+'<p>'+ this.events[i].venue+'</p>'+'</li>'+'</a>';
  	    $('<a href= "/events/'+this.events[i].id+'">'+'<li>'+'<div class="event-search-box">'+'<span>'+this.events[i].start_date+'</span>'+'<span>'+this.events[i].start_month+'</span>'+'</div>'+'<p><strong>'+this.events[i].name+'</strong></p>'+'<p>'+ this.events[i].venue+'</p>'+'</li>'+'</a>').appendTo( ".event-search" );
      }
    }	
  }

  searchHomes(){
    if(!this.homeForSales.length){
      $('<li>No result found</li>').appendTo(".hm_search");
    }
    else{
    	for(var i=0;i<this.homeForSales.length;i++){
        if (i === 3) { break; }
        if(this.homeForSales[i].images == null){
          this.homeForSales[i].images = [];
        }
  	  	$('<a href= "/homes-for-sale/'+this.homeForSales[i].id+'">'+'<li>'+'<span>'+'<img src="'+this.homeForSales[i].images[0]+'" alt="">'+'</span>'+this.homeForSales[i].address+' '+this.homeForSales[i].address1+'</li>'+'</a>').appendTo(".hm_search");
  	  }
    }	
  }

  getGenericInfopack(){
    this.apiService.get('/pdf_info_packs/featured_pack').subscribe((res:any)=>{
     this.genericInfo = res; 
      window.localStorage.setItem('generic_url',this.genericInfo.info_pack.info_pdf.url);
    });
  }

  changeColor($event){
    $event.target.style.backgroundColor = $event.type=="mouseover" ? '#ffffff': '#105dac';
    $event.target.style.color =  $event.type=="mouseover" ? '#105dac':'#ffffff';
  }

  onHover($event){
    $event.target.style.color = $event.type=="mouseover" ? '#105dac':'#414952';
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
          $('#get-an-info-pack-modal-header')[0].style.display = 'none';
          $('body').removeClass('modal-open');
          $('.modal-backdrop').remove();
          console.log("Event sended");
        });
      /*-------------Segment----------*/
           this.segment.identify(this.info.email, {
                firstname: this.info.firstname,
                lastname: this.info.lastname,
                plan: this.info.plan,
                phone: this.info.phone,
                email: this.info.email,
                description: this.info.area
           });
           /*-----------------------*/
    }else{
      console.log('validation failed!');
    }
  }

/*  closeMenu(){
   $("#navbar").slideToggle();
   $("#resbtn-show").toggleClass('open-men');
  }*/

  closeSearch(){
    $("#show-sw").removeClass("open");
  }
}
