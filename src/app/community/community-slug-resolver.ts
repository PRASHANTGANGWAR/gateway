import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Community, CommunitiesService } from '../shared';

@Injectable()
export class CommuntySlugResolver implements Resolve<Community> {
  constructor(
    private communitiesService: CommunitiesService,
    private router: Router
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
        var slugComponent = this.communitiesService.get(route.params['slug']);
        if(slugComponent){
           // return slugComponent;
            // this.router.navigateByUrl('/community/'+slugComponent);
            }else {
            this.router.navigateByUrl('/pagenotfound');
          }
        return slugComponent;
              

  }
}