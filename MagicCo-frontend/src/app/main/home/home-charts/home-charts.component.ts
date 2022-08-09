import { Component, OnInit } from '@angular/core';
import { PieChartConfiguration } from 'ontimize-web-ngx-charts';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { OChartComponent } from 'ontimize-web-ngx-charts';
import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { OntimizeService } from 'ontimize-web-ngx';


@Component({
  selector: 'app-home-charts',
  templateUrl: './home-charts.component.html',
  styleUrls: ['./home-charts.component.css']
})
export class HomeChartsComponent {
  protected data: Array<Object>;
  serviceResponse: HttpResponse<any>;

  constructor(protected httpClient: HttpClient) {
  }

  ngAfterViewInit(): void {
    //TODO
    this.loadJSONData().subscribe(data => {
      // Process data if necessary
      // this.data = data;
    })
  }

  protected loadJSONData() {
    //TODO make http call that returns an observable
    return this.httpClient.get<any>("https://localhost:33333/shop")
  }

}








