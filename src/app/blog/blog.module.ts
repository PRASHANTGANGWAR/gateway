import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared';


const blogRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path:'blog',
    component: BlogComponent
  }
]);

@NgModule({
  imports: [
    SharedModule,
    blogRouting
  ],
  declarations: [
   BlogComponent
  ],
   providers: [
  ]
})
export class blogModule {}