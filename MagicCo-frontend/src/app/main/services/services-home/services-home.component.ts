import { Component, OnInit } from '@angular/core';
import { showNumberAsPercentsFunction } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-services-home',
  templateUrl: './services-home.component.html',
  styleUrls: ['./services-home.component.css']
})
export class ServicesHomeComponent implements OnInit {

  public showNumberAsPercents = showNumberAsPercentsFunction;

  constructor() { }

  ngOnInit() {
  }

}
