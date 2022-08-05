import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopsRoutingModule } from './shops-routing.module';
import { OFormComponent, OntimizeWebModule } from 'ontimize-web-ngx';
import { ShopsHomeComponent } from './shops-home/shops-home.component';
import { ShopsDetailsComponent } from './shops-details/shops-details.component';
import { ShopsNewComponent } from './shops-new/shops-new.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ShopsHomeComponent, ShopsDetailsComponent, ShopsNewComponent],
  imports: [
    CommonModule,
    ShopsRoutingModule,
    OntimizeWebModule,
    SharedModule
  ],
  providers: [
    { provide: OFormComponent }]
})
export class ShopsModule { }
