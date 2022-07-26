import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingServicesComponent } from '../landing-services/landing-services.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
