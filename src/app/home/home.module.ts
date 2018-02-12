import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'angular2-markdown';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent
  }
]);

@NgModule({
  imports: [
    MarkdownModule.forRoot(),
    homeRouting,
    SharedModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
   
  ]
})
export class HomeModule {}
