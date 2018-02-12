import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Community, CommunitiesService } from '../shared';

@Injectable()
export class CommuntyResolver implements Resolve<Community> {
  constructor(
    private communitiesService: CommunitiesService,
    private router: Router
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
  //   return this.articlesService.get(route.params['slug'])
  //          .map(
  //            article => {
  //              if (this.userService.getCurrentUser().username === article.author.username) {
  //                return article;
  //              } else {
  //                this.router.navigateByUrl('/');
  //              }

  //            }
  //          )
  //          .catch((err) => this.router.navigateByUrl('/'));
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
