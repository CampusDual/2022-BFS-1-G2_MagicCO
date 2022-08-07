import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { OTextInputComponent, OListComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-shop-reviews',
  templateUrl: './shop-reviews.component.html',
  styleUrls: ['./shop-reviews.component.css']
})
export class ShopReviewsComponent implements OnInit {

  @Input() item: number;

  @ViewChild('idShop', { static: false })
  private idShop: OTextInputComponent;

  @ViewChild('reviewGrid', { static: false })
  private reviewGrid: OListComponent;

  constructor() { }

  ngOnInit() {
    this.ngAfterViewInit();
  }

  ngAfterViewInit(){
      console.log("    " + this.item);
      this.reviewGrid.queryData({
        'id_shop': this.item
      })

  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
