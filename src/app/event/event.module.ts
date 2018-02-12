import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventSlugResolver } from './event-slug-resolver';
import { SharedModule } from '../shared';
import { eventComponent } from './event.component';
import {  EventsComponent } from './events.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';

const eventRouting: ModuleWithProviders = RouterModule.forChild([
 
  {
    path: 'events',
    component:  EventsComponent,
  },

  {
    path: 'events/:slug',
    component: eventComponent,
    resolve: {
      home: EventSlugResolver
    }
  }
]);


@NgModule({
  imports: [
    SharedModule,
    eventRouting,
    Ng2SearchPipeModule,
    Ng2OrderModule
  ],
  declarations: [
    EventsComponent,
    eventComponent
  ],
   providers: [
   EventSlugResolver
  ]
})
export class eventModule {}