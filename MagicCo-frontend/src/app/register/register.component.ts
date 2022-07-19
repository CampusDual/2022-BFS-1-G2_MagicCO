import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, Observable, OValueChangeEvent } from 'ontimize-web-ngx';
import { RegisterService } from './register.service';
import { User } from './user';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],

})


export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor() { }

  ngOnInit() {

  }

  confirmPassword(value){
    alert(value);
  }

  onValueChange(event: OValueChangeEvent) {
    var password = document.getElementById("password").innerHTML;
    console.log(document.getElementById("password").innerHTML);
    //var cpassword = (document.getElementById("cpassword") as HTMLInputElement).value;
    alert(password);
    //alert(cpassword);
    if((<HTMLInputElement>document.getElementById("password")).value != (<HTMLInputElement>document.getElementById("cpassword")).value){

      document.getElementById("errormessage").style.visibility="visible";
      document.getElementById("buttonregister").disabled="true";

    }else{
      document.getElementById("buttonregister").disabled="false";
    }

    /*if (!this.printOnValueChange.checked) {
      return;
    }
    const eventChange = new ConsoleLogEvent();
    eventChange.eventName = 'onValueChange';
    eventChange.newValue = event.newValue;
    eventChange.oldValue = event.oldValue;
    eventChange.type = event.isProgrammaticChange() ? 'PROGRAMMATIC' : 'USER';
    eventChange.attr = event.target.oattr;

    this.consoleLog.unshift(eventChange);*/
    //alert(event.newValue);
  }

  register(){
    alert("Entra");
  }

}


