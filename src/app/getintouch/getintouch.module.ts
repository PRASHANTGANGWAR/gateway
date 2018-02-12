import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GetintouchComponent } from './getintouch.component';
import { SharedModule } from '../shared';
import { MarkdownModule } from 'angular2-markdown';

const getintouchRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path:'enquire-now',
    component: GetintouchComponent
  }
]);

@NgModule({
  imports: [
    MarkdownModule.forRoot(),
    SharedModule,
    getintouchRouting
  ],
  declarations: [
   GetintouchComponent
  ],
   providers: [
  ]
})
export class getintouchModule {}