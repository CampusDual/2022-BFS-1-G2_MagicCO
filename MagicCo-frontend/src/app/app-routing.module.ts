import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LandingPageComponent } from './landing-page/landing-page.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'landing-page', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) },
  { path: '', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) },
  { path: 'login', loadChildren: () => import('./landing-page/login/login.module').then(m => m.LoginModule) },
  //{ path: '', component: LandingPageModule, pathMatch: 'full' }
  //{ path: '', redirectTo: 'main', pathMatch: 'full' }
  //{ path: '', redirectTo: 'landing-page', pathMatch: 'full' }
];

const opt = {
  enableTracing: false
  // true if you want to print navigation routes
};

@NgModule({
  imports: [RouterModule.forRoot(routes, opt)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
