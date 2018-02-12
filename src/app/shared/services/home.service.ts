import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { Home } from '../models';

declare var window:any;
@Injectable()
export class HomesService {
  home: Array<string> = [];
  constructor (
    private apiService: ApiService,
    private router: Router
    ) {}

  get(slug): Observable<Home> {
    return this.apiService.getHomeDetail('/home_for_sales/'+slug).map(res=>{
      if(res.status == "SUCCESS"){
        return slug;
      }
      else{
        this.router.navigateByUrl('/pagenotfound');
      }
    });
  }
}
