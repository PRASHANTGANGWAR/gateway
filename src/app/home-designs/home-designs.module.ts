import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'angular2-markdown';
import { HomeDesignsComponent } from './home-designs.component';
import { SharedModule } from '../shared';

const homeDesignsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'home-designs',
    component: HomeDesignsComponent
  }
]);

@NgModule({
  imports: [
    MarkdownModule.forRoot(),
    homeDesignsRouting,
    SharedModule
  ],
  declarations: [
    HomeDesignsComponent
  ],
  providers: [
   
  ]
})
export class HomeDesignsModule {}
