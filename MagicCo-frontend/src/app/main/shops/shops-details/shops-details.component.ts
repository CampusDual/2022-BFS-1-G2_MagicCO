import { ResourceLoader } from '@angular/compiler';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ODateInputComponent, OListComponent, OntimizeService, OTableCellEditorDateComponent, OTableComponent, OTextInputComponent } from 'ontimize-web-ngx';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-shops-details',
  templateUrl: './shops-details.component.html',
  styleUrls: ['./shops-details.component.css']
})


export class ShopsDetailsComponent implements OnInit {

  private routeSub: Subscription;
  shopId: number;

  public currentItem;

  @ViewChild('idShop', { static: false })
  public idShop: OTextInputComponent;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    @Inject(OntimizeService) private service: OntimizeService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.shopId = Number(params["id_shop"]);
      console.log ('this ' + this.shopId);
    });
  }

  ngAfterViewInit(){

    this.currentItem = this.idShop.getValue();

    console.log('currentItem ' + this.currentItem);
  }

  checkSubscriptionStatus() {

  }



}
