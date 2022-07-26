import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, Observable, OValueChangeEvent } from 'ontimize-web-ngx';
import { RegisterService } from './register.service';
import { User } from './user';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],

})


export class RegisterComponent implements OnInit {

  baseUrl: string = "http://localhost:33333/users/user/";

  registerForm: FormGroup = new FormGroup({});
  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  match: boolean = false;


  constructor(private http: HttpClient, private router: Router, @Inject(AuthService) private authService: AuthService) {
  }

  ngOnInit() {
    this.registerForm = this.createForm();
  }



  register(){
    console.log(this.registerForm.value);
    /*const data = {
      "USER_": this.registerForm.value.username,
      "EMAIL": this.registerForm.value.email,
      "PASSWORD": this.registerForm.value.password
    };
    const sqlTypes = {
      "USER_":12,
      "EMAIL":12,
      "PASSWORD":12
    };
    const header = {
      'content-type': 'application/json',
      'Authorization': 'Basic ' + btoa('demo:demouser')
    };
    console.log(header);

    const body =
      '{"data": {' + data +'}  ,"sqltypes": {' + sqlTypes+ '}} ';*/
      var idFinal="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGlvbi10aW1lIjoxNjU3MDA2NjA3MjA3LCJ1c2VybmFtZSI6ImFkbWluaXN0cmF0b3IifQ.ceXatWm60xn4w87yHT-6mZW_Wz3gsTua23pxfS2cTwU";
    console.log(idFinal);
            const options ={
            headers : new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': "Bearer "+ idFinal
            }),
            body: {
              "data" : {
                "USER_": this.registerForm.value.username,
                "EMAIL": this.registerForm.value.email,
                "PASSWORD": this.registerForm.value.password
              },
              "sqlTypes" : {
                "USER_":12,
                "EMAIL":12,
                "PASSWORD":12
              }
            }
          }
          console.log(options);
      //this.http.post(this.baseUrl, body, { headers: header })
      this.http.post(this.baseUrl, options).subscribe(
        data => { // json data
          console.log('Success: ', data);
          this.router.navigate(['../login']);
      },
      error => {
          console.log('Error: ', error);
      }
      );
  }



 createForm() {
    //console.log('method : createForm')
    return new FormGroup({
      username: new FormControl('', [Validators.minLength(3), Validators.maxLength(25)]),
      email: new FormControl('', [Validators.minLength(3), Validators.pattern(this.emailPattern)]),
      password: new FormControl('', [Validators.minLength(6), Validators.maxLength(25)]),
      confirmPass: new FormControl()
    });
  }
  checkPasswords(){
    let stringpass = this.registerForm.value.password;
    let stringrepeat = this.registerForm.value.confirmPass;
    if(stringpass != stringrepeat){
      //alert(this.registerForm.valid);
      this.match = true;
    }

  }

}


