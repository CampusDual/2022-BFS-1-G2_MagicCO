import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, OTableComponent } from 'ontimize-web-ngx';
import { identifierModuleUrl } from '@angular/compiler';
import { AuthService} from 'ontimize-web-ngx';



@Component({
  selector: 'app-subscriptions-home',
  templateUrl: './subscriptions-home.component.html',
  styleUrls: ['./subscriptions-home.component.css']
})
export class SubscriptionsHomeComponent implements OnInit {

  @ViewChild('sstable', { read: OTableComponent, static: true }) public sstable: OTableComponent;

  constructor(private http: HttpClient,@Inject(AuthService) private authService: AuthService) { }
  

  ngOnInit() {
  }

  public patata(table: any){
    var ontimize="com.ontimize.web.ngx.jee.seed";
    localStorage.setItem('ontimize', 'Como utilizar el LocalStorage en Angular');
    var values = JSON.parse(localStorage.getItem(ontimize));
    var idFinal=this.authService.getSessionInfo().id;

    const options ={ headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+ idFinal //buscar en local storage
    }),
    body: {
      "filter":{
      ID_SUBSCRIPTION_SERVICE:table[0].ID_SUBSCRIPTION_SERVICE
      }
    }
  }
    this.http.delete('http://localhost:33333/subscriptionsService/subscriptionServiceService', options).subscribe(
      data => { // json data
        console.log('Success: ', data);
    },
    error => {
        console.log('Error: ', error);
    }
    );
    
  }

}
/*
const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  body: {
    id: 1,
    name: 'test',
  },
};

this.httpClient
  .delete('http://localhost:8080/something', options)
  .subscribe((s) => {
    console.log(s);
  });*/