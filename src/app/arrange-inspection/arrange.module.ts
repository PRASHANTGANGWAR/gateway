import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { arrangeComponent } from './arrange.component';
import { SharedModule } from '../shared';
import { MarkdownModule } from 'angular2-markdown';

const arrangeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path:'arrange-inspection',
    component: arrangeComponent
  }
]);

@NgModule({
  imports: [
    MarkdownModule.forRoot(),
    SharedModule,
    arrangeRouting
  ],
  declarations: [
   arrangeComponent
  ],
   providers: [
  ]
})
export class arrangeModule {}