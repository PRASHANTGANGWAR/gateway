import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';
import { enquiryComponent } from './enquiry.component';

const enquiryRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'enquiry',
    component: enquiryComponent
  }
]);


@NgModule({
  imports: [
    SharedModule,
    enquiryRouting
  ],
  declarations: [
    enquiryComponent
  ],
   providers: [
  ]
})
export class enquiryModule {}