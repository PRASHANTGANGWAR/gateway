import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Home, HomesService } from '../shared';

@Injectable()
export class HomeSlugResolver implements Resolve<Home> {
  constructor(
    private homesService: HomesService,
    private router: Router
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
        var slugComponent = this.homesService.get(route.params['slug']);
        if(slugComponent){
            }else {
            this.router.navigateByUrl('/pagenotfound');
          }
        return slugComponent;
              

  }
}