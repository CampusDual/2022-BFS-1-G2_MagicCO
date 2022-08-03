import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AuthService, OFormComponent, OTableComponent, OTextInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-shops-new',
  templateUrl: './shops-new.component.html',
  styleUrls: ['./shops-new.component.css']
})
export class ShopsNewComponent implements OnInit {

  @ViewChild('textInput', { read: OTextInputComponent, static: true }) public textInput: OTextInputComponent;
  @ViewChild('textInput', { read: OFormComponent, static: true }) public form: OFormComponent;
  constructor(
    @Inject(AuthService) private authService: AuthService
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.form.setFieldValue("user_id", "user");
  }

  onSave() {
    this.form.setFieldValue("user_id", "user")
    this.form.insert();
  }
}
