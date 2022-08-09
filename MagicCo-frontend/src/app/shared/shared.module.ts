import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { PageHeaderComponent } from '../landing-page/page-header/page-header.component';
import { SubscriptionStatusRendererComponent } from '../main/shops/shops-details/subscription-status-renderer/subscription-status-renderer.component';


export function showNumberAsPercentsFunction (rowData: Array<any>): number {
  return rowData['efficiency_percentage']/100;
}

@NgModule({
  imports: [
    OntimizeWebModule
  ],
  declarations: [
    PageHeaderComponent,
    SubscriptionStatusRendererComponent
  ],
  exports: [
    CommonModule,
    PageHeaderComponent,
    SubscriptionStatusRendererComponent
  ]
})
export class SharedModule { }
