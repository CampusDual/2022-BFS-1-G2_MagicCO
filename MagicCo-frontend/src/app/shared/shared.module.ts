import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';


export function showNumberAsPercentsFunction (rowData: Array<any>): number {
  return rowData['EFFICIENCY_PERCENTAGE']/100;
}

@NgModule({
  imports: [
    OntimizeWebModule
  ],
  declarations: [
  ],
  exports: [
    CommonModule
  ]
})
export class SharedModule { }
