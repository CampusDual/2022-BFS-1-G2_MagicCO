import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'o-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  constructor(private router: Router) { }

  // goToLogin(){
  //   this.router.navigateByUrl('./login/');
  // }

}






