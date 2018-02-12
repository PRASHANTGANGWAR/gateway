import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrivacyComponent } from './privacy.component';
import { SharedModule } from '../shared';
import { MarkdownModule } from 'angular2-markdown';

const privacyRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path:'privacy',
    component: PrivacyComponent
  }
]);

@NgModule({
  imports: [
    MarkdownModule.forRoot(),
    SharedModule,
    privacyRouting
  ],
  declarations: [
   PrivacyComponent
  ],
   providers: [
  ]
})
export class privacyModule {}