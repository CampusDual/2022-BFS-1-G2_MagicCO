import { Component, OnInit, ViewChild } from '@angular/core';
import { OComboComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-services-detail',
  templateUrl: './services-detail.component.html',
  styleUrls: ['./services-detail.component.css']
})
export class ServicesDetailComponent implements OnInit {

  @ViewChild('truefalsestring', {static: false }) protected booleanCombo: OComboComponent;

  public booleanArray = [{

    booleanString: 'false',

    booleanValue: false

  }, {

    booleanString: 'true',

    booleanValue: true

  }];
  constructor() { }

  ngOnInit() {
  }

  getValue() {

    console.log(this.booleanCombo);

  }

}

