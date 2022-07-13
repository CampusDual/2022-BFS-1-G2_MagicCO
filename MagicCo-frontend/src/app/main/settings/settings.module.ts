import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsHomeComponent } from './settings-home/settings-home.component';


@NgModule({
  declarations: [SettingsHomeComponent],
  imports: [
    OntimizeWebModule,
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
