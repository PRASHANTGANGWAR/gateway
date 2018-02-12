import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'angular2-markdown';
import { TestimonialComponent } from './testimonial.component';
import { SharedModule } from '../shared';

const testimonialRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'resident-stories',
    component: TestimonialComponent
  }
]);

@NgModule({
  imports: [
    MarkdownModule.forRoot(),
    testimonialRouting,
    SharedModule
  ],
  declarations: [
    TestimonialComponent
  ],
  providers: [
   
  ]
})
export class TestimonialModule {}
