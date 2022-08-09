import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AuthService, DialogService, OFormComponent, OTextInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-shops-new',
  templateUrl: './shops-new.component.html',
  styleUrls: ['./shops-new.component.css']
})
export class ShopsNewComponent implements OnInit {

  @ViewChild('textInput', { read: OTextInputComponent, static: true }) public textInput: OTextInputComponent;
  @ViewChild('formform', { read: OFormComponent, static: true }) public form: OFormComponent;

  constructor(@Inject(AuthService) private authService: AuthService,
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
