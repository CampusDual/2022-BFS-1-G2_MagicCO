import { Component, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { OComboComponent, OFormComponent } from 'ontimize-web-ngx';


@Component({
  selector: 'input-combo-true-false',
  templateUrl: './input-combo.component.html',
  styleUrls: ['./input-combo.component.css']
})

export class InputComboComponent implements OnInit {

  @ViewChild('truefalsestring', {static: false }) protected booleanCombo: OComboComponent;

  form: OFormComponent = null;

  public booleanArray = [{
    booleanString: 'false',
    MAGIC_STATUS: false,
    booleanInteger: 0
  }, {
    booleanString: 'true',
    MAGIC_STATUS: true,
    booleanInteger: 1
  }];

  public selectedBooleanString = 'true';

  constructor(form: OFormComponent) {
    this.form = form;
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    this.form.getComponents();
  }

  setValue() {
    //Acceder al input de nuestro componente
    //Cambiar el valor
    this.booleanCombo.setValue = this.booleanCombo.getValue();
    // console.log(this.booleanCombo);
  }

}
