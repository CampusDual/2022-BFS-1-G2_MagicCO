import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import {LandingPageComponent } from './landing-page/landing-page.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: 'landing-page', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) },
  // { path: '', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) },
  { path: 'login', loadChildren: () => import('./landing-page/login/login.module').then(m => m.LoginModule) },
  { path: 'main', loadChildren: ()=> import('./main/main.module').then(m=>m.MainModule)},
  { path: 'subscriptions', loadChildren: () => import('./main/subscriptions/subscriptions.module').then(m => m.SubscriptionsModule) },
  { path: 'register', loadChildren: ()=> import('./register/register.module').then(m=>m.RegisterModule)},

  //{ path: '', component: LandingPageModule, pathMatch: 'full' }
  //{ path: 'main', redirectTo: 'main', pathMatch: 'full' }

];

const opt: ExtraOptions = {
  enableTracing: false,
  anchorScrolling: 'enabled'
  // true if you want to print navigation routes
};

@NgModule({
  imports: [RouterModule.forRoot(routes, opt)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
