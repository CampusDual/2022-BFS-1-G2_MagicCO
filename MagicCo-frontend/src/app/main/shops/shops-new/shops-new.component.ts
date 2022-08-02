import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-shops-new',
  templateUrl: './shops-new.component.html',
  styleUrls: ['./shops-new.component.css']
})
export class ShopsNewComponent implements OnInit {

  constructor(
    @Inject(AuthService) private authService: AuthService
  ) { }

  ngOnInit() {
  }

  getUserId(){
    return this.authService.getSessionInfo().user;
  }
}
