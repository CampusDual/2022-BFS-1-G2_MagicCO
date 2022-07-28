import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { LoginModule } from './landing-page/login/login.module';

@Component({
  selector: 'o-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  constructor(private router: Router) { }

  goToLogin(){
    this.router.navigateByUrl('./login/')
  }
  
}



      


    