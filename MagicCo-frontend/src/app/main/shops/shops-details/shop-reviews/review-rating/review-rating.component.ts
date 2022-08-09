import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-rating',
  templateUrl: './review-rating.component.html',
  styleUrls: ['./review-rating.component.css']
})
export class ReviewRatingComponent implements OnInit {

  @Input() rating: number;

  constructor() { }

  ngOnInit() {
    console.log(this.rating);
  }

}
