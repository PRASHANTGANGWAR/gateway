import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus.component';
import { SharedModule } from '../shared';


const aboutusRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path:'about',
    component: AboutusComponent
  }
]);

@NgModule({
  imports: [
    SharedModule,
    aboutusRouting
  ],
  declarations: [
   AboutusComponent
  ],
   providers: [
  ]
})
export class aboutusModule {}