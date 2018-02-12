import { Component, AfterViewInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router,ActivatedRoute } from '@angular/router';

declare var $:any;
@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements AfterViewInit {
  today: number = Date.now();
  counts;
  homesLength:number = 0;

   constructor(private apiService: ApiService,
        private route: ActivatedRoute,
        private router: Router,
  	
  ) {
   		this.getCommunities();
   		//this.getHomeForSales();
   }

   ngAfterViewInit(){
     
     $.getScript('js/custom.js');
     $.getScript("js/wow.min.js");
     // $.getScript("js/modal-video.js"),
     $.getScript("js/jquery-modal-video.js");
     $.getScript("js/owl.carousel.js");
     $.getScript('js/sticky-nav.js');
   }


	goToFb(){
	  let url: string = '';
	   /* if (!/^http[s]?:\/\//.test(this.comunityDetail.facebook_links[0].link)) {
	        url += 'http://';
	    }

	    url += this.comunityDetail.facebook_links[0].link;*/
	   window.open("https://www.facebook.com", "_blank");
	}

	getCommunities(){
	  //fetching the list of all communities
      this.apiService.get('/communities/count_for_home_and_community').subscribe((res:any)=>{
          this.counts = res;
          console.log(this.counts);
        },
        err=>{
          console.log(err);
      });
	}

  /*goto(page:string){
    this.router.navigateByUrl('/'+page);
  }*/

	/*getHomeForSales(){
	  this.apiService.get('/home_for_sales').subscribe((res:any)=>{
        let homes = res;
      },err=>{
          alert(err.json());
      });
	}*/
}
