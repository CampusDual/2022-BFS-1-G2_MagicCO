import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit, Injector } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, DialogService, Observable, ODialogConfig, OntimizeService, OValueChangeEvent } from 'ontimize-web-ngx';
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

  protected service: OntimizeService;


  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(AuthService) private authService: AuthService,
    protected injector: Injector,
    protected dialogService: DialogService
  ) {
      this.service = this.injector.get(OntimizeService);
    }

  ngOnInit() {
    this.registerForm = this.createForm();
    this.configureService();
  }

  protected configureService() {
    const conf = this.service.getDefaultServiceConfiguration('users');
    this.service.configureService(conf);
  }

  register(){
    console.log(this.registerForm.value);
    localStorage.clear();
    localStorage.setItem('com.ontimize.web.ngx.jee.seed','{"lang":"en","session":{"user":"administrator","id":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGlvbi10aW1lIjoxNjU4OTI1ODc4OTIyLCJ1c2VybmFtZSI6ImFkbWluaXN0cmF0b3IifQ.Lteud4gbkOtRldEZcJa0c-bFRk6Oh5pwf1JqPgpXq4s"},"users":{"administrator":{"components":{"nav_service":"eyIwIjp7InVybCI6Ii9sYW5kaW5nLXBhZ2UiLCJxdWVyeVBhcmFtcyI6e319LCIxIjp7InVybCI6Ii9sb2dpbiIsInF1ZXJ5UGFyYW1zIjp7fX0sIjIiOnsidXJsIjoiL21haW4vaG9tZSIsInF1ZXJ5UGFyYW1zIjp7fX19"}}}}');
    const data ={
        "user_": this.registerForm.value.username,
        "email": this.registerForm.value.email,
        "password": this.registerForm.value.password
    };
    this.service.insert(data,'user')
    .subscribe(resp => {
      if (resp.code === 0) {
        console.log('Success: ', data);
        this.router.navigate(['../../', 'main']);

        // resp.data contains the data retrieved from the server

      } else {
        alert('Impossible to delete data!');
      }
    },
      (error: HttpErrorResponse) => {
        if(error.status == 500){
          if (this.dialogService) {
            const config: ODialogConfig = {
              okButtonText: 'Aceptar'
            };
            this.dialogService.error('Error', 'El usuario ya existe', config);
          }
        }
    });
    localStorage.clear();
  }

 createForm() {
    //console.log('method : createForm')
    return new FormGroup({
      username: new FormControl('', [Validators.minLength(3), Validators.maxLength(25)]),
      email: new FormControl('', [Validators.minLength(3), Validators.pattern(this.emailPattern)]),
      password: new FormControl('', [Validators.minLength(6), Validators.maxLength(25)]),
      confirmPass: new FormControl('', [Validators.minLength(6), Validators.maxLength(25)])
    });
  }
  checkPasswords(){
    let stringpass = this.registerForm.value.password;
    let stringrepeat = this.registerForm.value.confirmPass;
    if(stringpass.length < 6 || (stringrepeat.length < 6) && (stringrepeat != "")){
      if (this.dialogService) {
        const config: ODialogConfig = {
          okButtonText: 'Aceptar'
        };
        this.dialogService.error('Error', 'La contraseña no puede ser menor de 6 caracteres', config);
      }
    }else if(stringpass != stringrepeat){
      if (this.dialogService) {
        const config: ODialogConfig = {
          okButtonText: 'Aceptar'
        };
        this.dialogService.error('Error', 'Las contraseñas no coinciden', config);
      }
    }
  }
}


