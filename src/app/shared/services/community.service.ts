import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { Community } from '../models';

declare var window:any;
@Injectable()
export class CommunitiesService {
  constructor (
    private apiService: ApiService,
    private router: Router
    ) {}

  communities: Array<string> = [];
  get(slug): Observable<Community> {
    let data = {"community": { "short_name" : slug}};
    return this.apiService.getCommunitiesDetail('/communities/find_community',data).map(res=>{
      if(res.status == "SUCCESS"){
        return slug;
      }
      else{
        this.router.navigateByUrl('/pagenotfound');
      }
    });
  }
}
