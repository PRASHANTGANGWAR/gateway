import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { pageNotFoundcomponent }  from './pageNotFound.component';
import { SharedModule } from '../shared';


const pagenotfoundRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path:'pagenotfound',
    component: pageNotFoundcomponent
  }
]);

@NgModule({
  imports: [
    SharedModule,
    pagenotfoundRouting
  ],
  declarations: [
   pageNotFoundcomponent
  ],
   providers: [

  ]
})
export class pageNotFoundModule {}