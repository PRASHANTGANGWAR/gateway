import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThanksEnquiringComponent } from './thanks-enquiring.component';
import { SharedModule } from '../shared';

const thanksenquiringRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path:'success',
    component: ThanksEnquiringComponent
  }
]);

@NgModule({
  imports: [
    SharedModule,
    thanksenquiringRouting
  ],
  declarations: [
   ThanksEnquiringComponent
  ],
   providers: [
  ]
})
export class thanksenquiringModule {}