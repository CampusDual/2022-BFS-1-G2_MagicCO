import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
      canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'shops', loadChildren: () => import('./shops/shops.module').then(m => m.ShopsModule)},
      { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) },
      { path: 'subscriptions', loadChildren: () => import('./subscriptions/subscriptions.module').then(m => m.SubscriptionsModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
