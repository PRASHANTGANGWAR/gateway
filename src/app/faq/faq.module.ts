import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FAQComponent } from './faq.component';
import { SharedModule } from '../shared';


const faqRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path:'faqs',
    component: FAQComponent
  }
]);

@NgModule({
  imports: [
    SharedModule,
    faqRouting
  ],
  declarations: [
   FAQComponent
  ],
   providers: [
  ]
})
export class faqModule {}