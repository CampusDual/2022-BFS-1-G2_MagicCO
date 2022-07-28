import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { DialogService, Observable, OntimizeService, OTableComponent } from 'ontimize-web-ngx';
import { identifierModuleUrl } from '@angular/compiler';
import { AuthService } from 'ontimize-web-ngx';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-subscriptions-home',
  templateUrl: './subscriptions-home.component.html',
  styleUrls: ['./subscriptions-home.component.css']
})
export class SubscriptionsHomeComponent implements OnInit {
  constructor(private http: HttpClient,
    private router: Router,
    @Inject(OntimizeService) private service: OntimizeService,
    protected dialogService: DialogService) { }


  ngOnInit() {
  }

  public insertar(table: any) {
    //obtener el id
      this.router.navigateByUrl('/main/subscriptions/'+table.data.id_subscription)
  }

  public borrar(table: any) {
    // fixed the delete method
    // https://ontimizeweb.github.io/docs/v8/guide/service/
    this.service.configureService(this.service.getDefaultServiceConfiguration("subscriptionsservice"));
    const FILTER = {
      "id_subscription_service": table.getSelectedItems()[0].id_subscription_service
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

    var ontimize = "com.ontimize.web.ngx.jee.seed";
    localStorage.setItem('ontimize', 'Como utilizar el LocalStorage en Angular');
  }

  public avisar() {
    if (this.dialogService) {
      this.dialogService.info('Servicios',
        'Ha borrado correctamente"');
    }
  }

  public error() {
    if (this.dialogService) {
      this.dialogService.info('Servicios',
        'No se puede borrar"');
    }

  }

}
