import { Component, OnInit } from '@angular/core';
import { ApiService,SharedService } from '../shared';
import { NgForm } from '@angular/forms';
import { SegmentService } from 'ngx-segment-analytics';
import { Router,ActivatedRoute } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-arrange',
  templateUrl: './arrange-inspection.component.html',
  styleUrls: ['./arrange.component.css']
})
export class arrangeComponent implements OnInit {
address:any={};
showData:boolean = false;
getinTouch:any=[];
getinTouchHeading:any=[];
featuredHomes : any;
homeCount : any;
submitted = false;
info: any = { firstname: '', lastname: '', phone:'', email:''};
genericInfo:any;
constructor(private apiService: ApiService, private router: Router, private segment: SegmentService) {}

  ngOnInit() {
      window.scrollTo(0, 0);
      this.segment.page().then(() => console.log("Event sended"));
     
      //fetching the list of featured homes
      this.apiService.get('/home_for_sales/featured_home').subscribe((res:any)=>{
          this.featuredHomes = res.homes;
          $.getScript('js/customSlick.js');
          this.getGenericInfopack();
        },
        err=>{
          console.log(err);
      });

      //count of homes
      this.apiService.get('/communities/count_for_home_and_community').subscribe((res:any)=>{
          this.homeCount = res.home_count;
        },
        err=>{
          console.log(err);
      });


     let that = this;
     $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/6YIrecwB4AmqgogWCqYQ8k?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
     	function(data, status){
     		for (var i = 1; i <= Object.keys(data).length; ++i) {
    			that.getinTouch.push({'Heading': data.fields["addressHeading" + i],
    				'Description': data.fields["addressDescription" + i],'backgroundImage':data.fields["backgroundImage" +i].sys.id}); 
    		}


          $.each(that.getinTouch,function(i,item){
            console.log(item)
            $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/assets/"+item.backgroundImage+"?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85",
              function(data,status){
            
              console.log(data);
              that.getinTouch[i].image= data.fields.file.url;

              });
        })
     		

         })
         that.showData = true;


    $.get("https://cdn.contentful.com/spaces/4gfgcxsypl03/entries/2551z2CiskC2MsACMeuoSY?access_token=c1cb40d94d06b02f3d2591e546e33e39f80e1dae8764365afbd287bd89b43e85", 
     	function(data, status){
     		that.address=data.fields;
       })





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
        userData.community = this.info.community;
        userData.phone = this.info.phone;
        userData.email = this.info.email;
        userData.description = this.info.area;
        window.localStorage.setItem('generic_data',JSON.stringify(userData));
        console.log('success!');
         this.segment.track(this.info.email,{
         firstname: this.info.firstname,
         lastname: this.info.lastname,
         community: this.info.community,
         plan: this.info.plan,
         phone: this.info.phone,
         email: this.info.email,
         description: this.info.area
        }).then(() => {
            window.localStorage.setItem('genericCheck','1');
            this.router.navigateByUrl('/success');
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

  changeColor($event){
    $event.target.style.backgroundColor = $event.type=="mouseover" ? '#ffffff': '#105dac';
    $event.target.style.color =  $event.type=="mouseover" ? '#105dac':'#ffffff';
  }

  onHover($event){
    $event.target.style.color = $event.type=="mouseover" ? '#105dac':'#414952';
  }

}
