import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OurteamComponent } from './ourteam.component';
import { SharedModule } from '../shared';
import { MarkdownModule } from 'angular2-markdown';

const ourteamRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path:'team',
    component: OurteamComponent
  }
]);

@NgModule({
  imports: [
    MarkdownModule.forRoot(),
    SharedModule,
    ourteamRouting
  ],
  declarations: [
   OurteamComponent
  ],
   providers: [
  ]
})
export class ourteamModule {}