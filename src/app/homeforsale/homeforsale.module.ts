import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeSlugResolver } from './home-slug-resolver';
import { homeForSalescomponent }  from './homeforsale.component';
import { homePagecomponent }  from './homePage.component';
import { SharedModule } from '../shared';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { SafePipeModule } from 'safe-pipe';
import { homeForSalesPrecomponent }  from './homeforsalepreloved.component';

const homeforsaleRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path:'homes-for-sale',
    component: homeForSalescomponent
  },
  {
    path:'pre-loved',
    component: homeForSalesPrecomponent
  },
  {
    path:'homes-for-sale/:slug',
    component: homePagecomponent,
    resolve: {
      home: HomeSlugResolver
    }
  }
]);

@NgModule({
  imports: [
    SharedModule,
    homeforsaleRouting,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    SafePipeModule
  ],
  declarations: [
   homeForSalescomponent,
   homePagecomponent,
   homeForSalesPrecomponent
  ],
   providers: [
   HomeSlugResolver
  ]
})
export class homeforsaleModule {}