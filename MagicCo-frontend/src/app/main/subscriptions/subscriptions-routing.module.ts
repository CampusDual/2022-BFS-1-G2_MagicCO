import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionsHomeComponent } from './subscriptions-home/subscriptions-home.component';
import { SubscriptionlistComponent } from './subscriptions-home/subscriptionlist/subscriptionlist.component';


const routes: Routes = [{
  path:'',
  component: SubscriptionsHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class SubscriptionsRoutingModule { }
