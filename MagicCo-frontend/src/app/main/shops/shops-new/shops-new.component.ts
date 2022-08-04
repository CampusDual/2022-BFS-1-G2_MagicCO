import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AuthService, DialogService, OFormComponent, OntimizeService, OTableComponent, OTextInputComponent } from 'ontimize-web-ngx';
import { identifierModuleUrl } from '@angular/compiler';
import { Route, Router } from '@angular/router';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shops-new',
  templateUrl: './shops-new.component.html',
  styleUrls: ['./shops-new.component.css']
})
export class ShopsNewComponent implements OnInit {

  @ViewChild('textInput', { read: OTextInputComponent, static: true }) public textInput: OTextInputComponent;
  @ViewChild('textInput', { read: OFormComponent, static: true }) public form: OFormComponent;

  constructor(private http: HttpClient,
    private router: Router,
    @Inject(OntimizeService) private service: OntimizeService,
    @Inject(AuthService) private authService: AuthService,
    protected dialogService: DialogService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.form.setFieldValue("user_id", "user");
  }

  testing(){
    this.form.setFieldValue("user_id", "user");
    this.form.insert();
    this.service.configureService(this.service.getDefaultServiceConfiguration("shops"));
    const currentDate = new Date().toISOString();
    const FILTER = {
      "id_shop": this.form.getFieldValue("id_shop"),
      "name": this.form.getFieldValue("name"),
      "region": this.form.getFieldValue("region"),
      "longitude": this.form.getFieldValue("longitude"),
      "latitude": this.form.getFieldValue("latitude"),
      "description": this.form.getFieldValue("description"),
      "user_id": this.authService.getSessionInfo.name,
      "start_date": currentDate
    };
    console.log(FILTER);
    alert("Mira la consola");
  }

  onSave() {
    this.form.setFieldValue("user_id", "user")
    this.form.insert();
    this.service.configureService(this.service.getDefaultServiceConfiguration("shops"));
    const currentDate = new Date().toISOString();
    const FILTER = {
      "id_shop": this.form.getFieldValue("id_shop"),
      "name": this.form.getFieldValue("name"),
      "region": this.form.getFieldValue("region"),
      "longitude": this.form.getFieldValue("longitude"),
      "latitude": this.form.getFieldValue("latitude"),
      "description": this.form.getFieldValue("description"),
      "user_id": this.authService.getSessionInfo.name,
      "start_date": currentDate
    };
    console.log(FILTER);
  }
}
