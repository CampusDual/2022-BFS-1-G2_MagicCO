import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { InputComboComponent } from '../main/services/services-new/input-combo/input-combo.component';

export function showNumberAsPercentsFunction (rowData: Array<any>): number {
  return rowData['EFFICIENCY_PERCENTAGE']/100;
}

@NgModule({
  imports: [
    OntimizeWebModule
  ],
  declarations: [ InputComboComponent
  ],
  exports: [
    CommonModule,
    InputComboComponent
  ]
})
export class SharedModule { }
