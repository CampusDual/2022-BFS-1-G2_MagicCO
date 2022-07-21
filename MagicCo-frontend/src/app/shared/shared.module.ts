import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { PageHeaderComponent } from '../landing-page/page-header/page-header.component';

@NgModule({
  imports: [
    OntimizeWebModule
  ],
  declarations: [
    PageHeaderComponent
  ],
  exports: [
    CommonModule,
    PageHeaderComponent
  ]
})
export class SharedModule { }
