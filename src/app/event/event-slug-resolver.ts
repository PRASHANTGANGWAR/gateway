import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Event, EventService } from '../shared';

@Injectable()
export class EventSlugResolver implements Resolve<Event> {
  constructor(
    private eventService: EventService,
    private router: Router
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
        var slugComponent = this.eventService.get(route.params['slug']);
        if(slugComponent){
            }else {
            this.router.navigateByUrl('/pagenotfound');
          }
        return slugComponent;
              

  }
}