import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HowitworksComponent } from './howitworks.component';
import { SharedModule } from '../shared';


const howitworksRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path:'how-it-works',
    component: HowitworksComponent
  }
]);

@NgModule({
  imports: [
    SharedModule,
    howitworksRouting
  ],
  declarations: [
   HowitworksComponent
  ],
   providers: [
  ]
})
export class howitworksModule {}