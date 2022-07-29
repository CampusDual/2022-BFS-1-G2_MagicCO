import { NgModule } from '@angular/core';

import { RegisterRoutingModule } from './register-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    SharedModule,
    OntimizeWebModule,
    CommonModule,
    RegisterRoutingModule
  ]
})


export class RegisterModule { }
