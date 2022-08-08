import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { OTextInputComponent, OListComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-shop-reviews',
  templateUrl: './shop-reviews.component.html',
  styleUrls: ['./shop-reviews.component.css']
})
export class ShopReviewsComponent implements OnInit {

  count: number;
  score: number;

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


//Call the following functions in html:
//<div *ngIf="!isNaN(getScoreAvgReviews())" fxLayout="row" fxLayoutAlign="start start" fxLayoutGap="12px">
//<app-review-rating [rating]="getScoreAvgReviews()"></app-review-rating>
//</div>

  getScoreAvgReviews() {
    this.count = 0;
    this.score = 0;
    this.reviewGrid.dataArray.forEach((rate) => {
      this.score += rate.stars;
      this.count++;
    });
    return this.score / this.count;
  }

  isNaN(value: number) {
    return Number.isNaN(value);
  }

}
