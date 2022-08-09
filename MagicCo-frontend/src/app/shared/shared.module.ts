import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OChartModule } from 'ontimize-web-ngx-charts';
import { PageHeaderComponent } from '../landing-page/page-header/page-header.component';


export function showNumberAsPercentsFunction (rowData: Array<any>): number {
  return rowData['efficiency_percentage']/100;
}

@NgModule({
  imports: [
    OntimizeWebModule
  ],
  declarations: [
    PageHeaderComponent
  ],
  exports: [
    CommonModule,
    PageHeaderComponent,
    OChartModule
  ]
})
export class SharedModule { }
