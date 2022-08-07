import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { OTextInputComponent, OListComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-shop-reviews',
  templateUrl: './shop-reviews.component.html',
  styleUrls: ['./shop-reviews.component.css']
})
export class ShopReviewsComponent implements OnInit {

  @Input() shopId: number;

  @ViewChild('idShop', { static: false })
  private idShop: OTextInputComponent;

  @ViewChild('reviewGrid', { static: false })
  private reviewGrid: OListComponent;

  constructor() { }

  ngOnInit() {
    // alert(this.reviews);
  }

  ngAfterViewInit(){
      console.log("    " + this.shopId)
      this.reviewGrid.queryData({
        'id_shop': this.shopId
      })

  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
