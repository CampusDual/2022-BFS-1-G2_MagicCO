import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { DialogService, Observable, OntimizeService, OTableComponent } from 'ontimize-web-ngx';
import { identifierModuleUrl } from '@angular/compiler';
import { AuthService} from 'ontimize-web-ngx';



@Component({
  selector: 'app-subscriptions-home',
  templateUrl: './subscriptions-home.component.html',
  styleUrls: ['./subscriptions-home.component.css']
})
export class SubscriptionsHomeComponent implements OnInit {

  //@ViewChild('sstable', { read: OTableComponent, static: true }) public sstable: OTableComponent;

  constructor(private http: HttpClient,@Inject(AuthService) private authService: AuthService, @Inject(OntimizeService) private service: OntimizeService,protected dialogService: DialogService) { }


  ngOnInit() {
  }

 public insertar(table:any){

 }
  public borrar(table: any){
    // fixed the delete method
    // https://ontimizeweb.github.io/docs/v8/guide/service/
    this.service.configureService(this.service.getDefaultServiceConfiguration("subscriptionsservice"));
    const FILTER ={
      "ID_SUBSCRIPTION_SERVICE": table[0].ID_SUBSCRIPTION_SERVICE
    };

    
    this.service.delete(FILTER, 'subscriptionServiceService')
      .subscribe(resp => {
      if (resp.code === 0) {
        this.avisar();
        // resp.data contains the data retrieved from the server
      } else {
        //revisar--------------------------------------------------------------------------------------------------
        this.error();
      }
    });
    //end

    var ontimize="com.ontimize.web.ngx.jee.seed";
    localStorage.setItem('ontimize', 'Como utilizar el LocalStorage en Angular');
    var values = JSON.parse(localStorage.getItem(ontimize));
    var idFinal=this.authService.getSessionInfo().id;
/*
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
    */
  }
  public avisar (){
    if (this.dialogService) {
      this.dialogService.info('Servicios',
          'Ha borrado correctamente"');
    }

  }
  public error (){
    if (this.dialogService) {
      this.dialogService.info('Servicios',
          'No se puede borrar"');
    }

  }

}
