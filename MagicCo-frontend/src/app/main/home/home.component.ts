import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MultiBarHorizontalChartConfiguration, PieChartConfiguration } from 'ontimize-web-ngx-charts';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  chartParameters: PieChartConfiguration;
  chartBarParam: MultiBarHorizontalChartConfiguration;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
    this.chartParameters = new PieChartConfiguration();
    this.chartParameters.cornerRadius = 20;
    this.chartParameters.legendPosition = 'top';
    this.chartParameters.height = 900;
    this.chartParameters.width = 900;
    this.chartParameters.showLabels = true;
    this.chartParameters.labelsOutside = false;
    this.chartParameters.showTooltip = true;
    this.chartParameters.showLeyend = true;
    this.chartParameters.labelType = 'value';
    this.chartParameters.yLabel = "Amount (€)";

    this.chartBarParam = new MultiBarHorizontalChartConfiguration();
    this.chartBarParam.height = 800;
    this.chartBarParam.showLegend = true;
    this.chartBarParam.showValues = true;
    this.chartBarParam.showYAxis = false;
  }

  ngOnInit() {
    // nothing to do
  }

  navigate() {
    //todo: check the routing path below
    // this.router.navigate(['../', 'login'], { relativeTo: this.actRoute });
    this.router.navigate(['../../', 'landing-page'], { relativeTo: this.actRoute });
  }

}
