import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesHomeComponent } from './services-home/services-home.component';
import { ServicesDetailComponent } from './services-detail/services-detail.component';
import { ServicesNewComponent } from './services-new/services-new.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ServicesHomeComponent, ServicesDetailComponent, ServicesNewComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule,
    OntimizeWebModule
  ]
})
export class ServicesModule { }
