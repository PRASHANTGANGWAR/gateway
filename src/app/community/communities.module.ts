import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'angular2-markdown';
import { CommuntyResolver} from './community-resolver';
import { CommuntySlugResolver } from './community-slug-resolver';
import { communitiesComponent } from './communities.component';
import { communityComponent } from './community.component';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
import { SharedModule } from '../shared';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { SafePipeModule } from 'safe-pipe';

const settingsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'communities',
    component: communitiesComponent
  },
  {
    path: ':slug',
    component: communityComponent,
    resolve: {
      community: CommuntyResolver
    }
  },
  {
    path: 'community/:slug',
    component: communityComponent,
    resolve: {
      community: CommuntySlugResolver
    }
  }
]);
                                                                                                                                                                                                                                              
@NgModule({
  imports: [
    MarkdownModule.forRoot(),
    SharedModule,
    settingsRouting,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    SafePipeModule
  ],
  declarations: [
    communitiesComponent,
    communityComponent
  ],
   providers: [
    CommuntyResolver,
    CommuntySlugResolver
  ]
})
export class communitiesModule {}
