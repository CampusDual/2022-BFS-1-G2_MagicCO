import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PageHeaderComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  goToLogin() {
    this.router.navigate(['./login']);
  }
  goToRegister() {
    this.router.navigate(['../../register']);
  }



}
