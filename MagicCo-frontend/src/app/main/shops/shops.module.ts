import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopsRoutingModule } from './shops-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { ShopsHomeComponent } from './shops-home/shops-home.component';
import { ShopsDetailsComponent } from './shops-details/shops-details.component';
import { ShopsNewComponent } from './shops-new/shops-new.component';


@NgModule({
  declarations: [ShopsHomeComponent, ShopsDetailsComponent, ShopsNewComponent],
  imports: [
    CommonModule,
    ShopsRoutingModule,
    OntimizeWebModule
  ]
})
export class ShopsModule { }
