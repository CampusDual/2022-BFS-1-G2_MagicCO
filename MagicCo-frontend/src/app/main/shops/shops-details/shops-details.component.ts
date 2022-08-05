import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ODateInputComponent, OntimizeService, OTableCellEditorDateComponent, OTableComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-shops-details',
  templateUrl: './shops-details.component.html',
  styleUrls: ['./shops-details.component.css']
})
export class ShopsDetailsComponent implements OnInit {

  @ViewChild('shopSubscriptionTable', { static: false })
  private subscriptionTable: OTableComponent;

  @ViewChild('ssd', { static: false })
  private ssd: OTableCellEditorDateComponent;

  public subscriptionId;

  constructor(
    private router: Router,
    @Inject(OntimizeService) private service: OntimizeService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {

  }

  ngAfterViewInit(){

  }

  checkSubscriptionStatus() {

  }



}
