import { Component, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { OComboComponent } from 'ontimize-web-ngx';


@Component({
  selector: 'input-combo-true-false',
  templateUrl: './input-combo.component.html',
  styleUrls: ['./input-combo.component.css']
})

export class InputComboComponent implements OnInit {

  @ViewChild('truefalsestring', {static: false }) protected booleanCombo: OComboComponent;

  constructor() {

  }

  ngOnInit(): void {

  }

  public booleanArray = [{
    booleanString: 'false',
    booleanValue: false
  }, {
    booleanString: 'true',
    booleanValue: true
  }];

  public selectedBooleanString = 'true';

  getValue() {
    console.log(this.booleanCombo);
  }

}
