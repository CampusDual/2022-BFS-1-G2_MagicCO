import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, Observable } from 'ontimize-web-ngx';
import { RegisterService } from './register.service';
import { User } from './user';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],

})


export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    const userCtrl: FormControl = new FormControl('', Validators.required);
    const pwdCtrl: FormControl = new FormControl('', Validators.required);

    this.registerForm = new FormGroup({});
    this.registerForm.addControl('username', userCtrl);
    this.registerForm.addControl('password', pwdCtrl);
  }


  register(){
    const userName = this.registerForm.value['username'];
    const password = this.registerForm.value['password'];


    if (password == password){
      this.registerService.createUserAccount(userName, password)
      .subscribe();

  }

  }


}


