import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { Event } from '../models';

declare var window:any;
@Injectable()
export class EventService {
  events: Array<string> = [];
  constructor (
    private apiService: ApiService,
    private router: Router
    ) {}

  get(slug): Observable<Event> {
    return this.apiService.getEventDetail('/events/'+slug).map(res=>{
      if(res.status == "SUCCESS"){
        return slug;
      }
      else{
        this.router.navigateByUrl('/pagenotfound');
      }
    });
    /*if(this.events.indexOf(slug)==-1){ 
      //do nothing
    }else {
     return slug;
    }*/
  }
}
