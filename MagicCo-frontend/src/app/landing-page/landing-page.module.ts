import { NgModule } from '@angular/core';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingServicesComponent } from './landing-services/landing-services.component';
import { LandingPageComponent } from './landing-page.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../shared/shared.module';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { LandingServiceDetailComponent } from './landing-service-detail/landing-service-detail.component';
import { LandingTiersComponent } from './landing-tiers/landing-tiers.component';



@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    LandingPageRoutingModule
  ],
  declarations: [
    LandingPageComponent,
    LandingServicesComponent,
    PageFooterComponent,
    LandingServiceDetailComponent,
    LandingTiersComponent
  ],
  entryComponents:[
    LandingServiceDetailComponent
  ]
})
export class LandingPageModule { }
