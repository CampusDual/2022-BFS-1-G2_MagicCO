import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, Observable } from 'ontimize-web-ngx';
//import { RegisterService } from './register.services';
import { User } from './user';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],

})


export class RegisterComponent implements OnInit {

  registerForm: FormControl = new FormControl({});
  // userCtrl: FormControl = new FormControl('', Validators.required);
  // pwdCtrl: FormControl = new FormControl('', Validators.required);

  user:User = new User();
  baseUrl: string = "http://localhost:33333/users/user/";

  constructor(
    //private registerService: RegisterService
    public authService: AuthService,
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {

  }




  register(user: User): Observable<Object>{
    // const userName = this.registerForm.value.username;
    // const password = this.registerForm.value.password;

    const header = { "content-type": "application/json" };
    const body =
      '{"data": {' +
      JSON.stringify(user) +
      '}  ,"sqltypes": {"USER_": 12,"PASSWORD": 12}} ';
      console.log(body);

    return this.httpClient.post(this.baseUrl, body, { headers: header });

  }


}


