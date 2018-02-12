import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LegalComponent } from './legal.component';
import { SharedModule } from '../shared';
import { MarkdownModule } from 'angular2-markdown';


const legalRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path:'legal',
    component: LegalComponent
  }
]);

@NgModule({
  imports: [
    MarkdownModule.forRoot(),
    SharedModule,
    legalRouting
  ],
  declarations: [
   LegalComponent
  ],
   providers: [
  ]
})
export class legalModule {}