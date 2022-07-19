import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingServicesComponent } from './landing-services/landing-services.component';
import { LandingPageComponent } from './landing-page.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    LandingPageRoutingModule
  ],
  declarations: [
    LandingPageComponent
  ]
})
export class LandingPageModule { }
