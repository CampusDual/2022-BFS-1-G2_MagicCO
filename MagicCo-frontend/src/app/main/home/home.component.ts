import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
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
