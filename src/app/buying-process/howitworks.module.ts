import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { buyingProcessComponent } from './howitworks.component';
import { SharedModule } from '../shared';


const howitworksRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path:'buying-process',
    component: buyingProcessComponent
  }
]);

@NgModule({
  imports: [
    SharedModule,
    howitworksRouting
  ],
  declarations: [
   buyingProcessComponent
  ],
   providers: [
  ]
})
export class buyingProcessModule {}