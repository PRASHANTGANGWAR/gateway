import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HomeDesignsModule } from './home-designs/home-designs.module';
import { enquiryModule } from './enquiry-form/enquiry.module';
import { eventModule } from './event/event.module';
import { howitworksModule } from './howitworks/howitworks.module';
import { aboutusModule } from './aboutus/aboutus.module';
import { blogModule } from './blog/blog.module';
import { privacyModule } from './privacy/privacy.module';
import { legalModule } from './legal/legal.module';
import { ourteamModule } from './ourteam/ourteam.module';
import { careersModule } from './careers/careers.module';
import { faqModule } from './faq/faq.module';
import { getintouchModule } from './getintouch/getintouch.module';
import { thanksenquiringModule } from './thanks-enquiring/thanks.module';
import { pageNotFoundModule } from './pageNotFound/pageNotFound.module';
import { homeforsaleModule } from './homeforsale/homeforsale.module';
import { communitiesModule } from './community/communities.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { SegmentModule } from 'ngx-segment-analytics';
import { TestimonialModule } from './testimonial/testimonial.module';
import { buyingProcessModule } from './buying-process/howitworks.module';



import {
  ApiService,
  SharedService,
  FooterComponent,
  HeaderComponent,
  SharedModule,
  CommunitiesService,
  HomesService,
  EventService
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([]);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    buyingProcessModule,
    TestimonialModule,
    BrowserModule,
    enquiryModule,
    eventModule,
    HomeModule,
    HomeDesignsModule,
    howitworksModule,
    aboutusModule,
    blogModule,
    privacyModule,
    legalModule,
    ourteamModule,
    careersModule,
    faqModule,
    getintouchModule,
    thanksenquiringModule,
    rootRouting,
    SharedModule,
    pageNotFoundModule,
    homeforsaleModule,
    AngularFontAwesomeModule,
    communitiesModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    SegmentModule.forRoot({ apiKey: 'amiQRpJhALYD4uIyy8CbwwtT2axHGQhs', debug: true })

  ],
  providers: [
    ApiService,
    SharedService,
    CommunitiesService,
    HomesService,
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
