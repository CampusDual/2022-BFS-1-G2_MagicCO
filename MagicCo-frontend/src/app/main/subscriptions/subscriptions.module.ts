import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import { SubscriptionsHomeComponent } from './subscriptions-home/subscriptions-home.component';
import { SubscriptionlistComponent } from './subscriptions-home/subscriptionlist/subscriptionlist.component';


@NgModule({
  declarations: [SubscriptionsHomeComponent, SubscriptionlistComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    SubscriptionsRoutingModule
  ]
})
export class SubscriptionsModule { }
