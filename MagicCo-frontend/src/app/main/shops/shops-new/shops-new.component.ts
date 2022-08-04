import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AuthService, DialogService, OFormComponent, OntimizeService, OTextInputComponent } from 'ontimize-web-ngx';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shops-new',
  templateUrl: './shops-new.component.html',
  styleUrls: ['./shops-new.component.css']
})
export class ShopsNewComponent implements OnInit {

  @ViewChild('textInput', { read: OTextInputComponent, static: true }) public textInput: OTextInputComponent;
  @ViewChild('formform', { read: OFormComponent, static: true }) public form: OFormComponent;

  constructor(private http: HttpClient,
    private router: Router,
    @Inject(OntimizeService) private service: OntimizeService,
    @Inject(AuthService) private authService: AuthService,
    protected dialogService: DialogService) { }

  ngOnInit() {
  }

  back(){
    window.location.reload();
  }

  onSave() {
    this.form.setFieldValue("user_id",this.authService.getSessionInfo().user);
    this.form.insert();
    window.location.reload();
  }
}
