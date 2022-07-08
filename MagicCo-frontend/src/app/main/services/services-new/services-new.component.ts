import { Component, OnInit, ViewChild } from '@angular/core';
import { OComboComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-services-new',
  templateUrl: './services-new.component.html',
  styleUrls: ['./services-new.component.css']
})
export class ServicesNewComponent implements OnInit {
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
