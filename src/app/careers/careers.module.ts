import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CareersComponent } from './careers.component';
import { SharedModule } from '../shared';


const careersRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path:'careers',
    component: CareersComponent
  }
]);

@NgModule({
  imports: [
    SharedModule,
    careersRouting
  ],
  declarations: [
   CareersComponent
  ],
   providers: [
  ]
})
export class careersModule {}