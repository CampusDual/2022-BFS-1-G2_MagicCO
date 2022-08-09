import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { ChartService, OChartModule } from 'ontimize-web-ngx-charts';

import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    HomeRoutingModule,
    OChartModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
