import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { DialogService, Observable, OntimizeService, OTableComponent } from 'ontimize-web-ngx';
import { identifierModuleUrl } from '@angular/compiler';
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
      this.router.navigateByUrl('/main/subscriptions/'+table.data.id_subscription)
  }

  public deleteTier(table:any){
    if(confirm("Seguro que quiere borrar?")) {
      this.service.configureService(this.service.getDefaultServiceConfiguration("subscriptions"));
      const FILTER = { 
            "id_subscription": table.getSelectedItems()[0].id_subscription          
      };
      this.service.delete(FILTER, 'subscription')
            .subscribe(resp => {
              if (resp.code === 0) {
                window.location.reload();              
              }            
            }, err =>{
               if(this.dialogService){
                 this.dialogService.info('Servicios','No se puede borrar"');
               }
            } );        
    }
  }

  public addTier(){
    var x = document.getElementById("tier");
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    var y=document.getElementById("tierName");
    y.focus();
  }

  public Mostrartier(){    
    var tierName = (<HTMLInputElement>document.getElementById("tierName")).value;
    var tierNameComprobacion = tierName;
    tierNameComprobacion= tierNameComprobacion.replace(" ","");
    if (tierNameComprobacion.length!=0 && tierNameComprobacion.trim()) {
      var data = {
        "name":tierName
      }
        this.service.configureService(this.service.getDefaultServiceConfiguration("subscriptions"));
        this.service.insert(data, 'subscription').subscribe(resp => {
         if (resp.code === 0) {
          this.dialogService.info('Servicios','Se ha insertado correctamente');
          window.location.reload();
         }
        }, err =>{
          if(this.dialogService){
            this.dialogService.info('Servicios','Ya existe un tier con ese Nombre');
          }
       } );   
   
       
    } else { this.dialogService.info('Servicios','No puede insertar un tier sin nombre');}
      var x = document.getElementById("tier");
      if (x.style.display === "block") {
          x.style.display = "none";    
      }
  }
  

  public borrar(table: any) {
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
         
        }
      });
      var ontimize = "com.ontimize.web.ngx.jee.seed";
      localStorage.setItem('ontimize', 'Como utilizar el LocalStorage en Angular');
  }

  public avisar() {
    if (this.dialogService) {
      this.dialogService.info('Servicios',
        'Ha borrado correctamente, por favor haga click en refresh para ver los cambios');
    }
  }

  public error() {
    if (this.dialogService) {
      this.dialogService.info('Servicios',
        'No se puede borrar"');
    }

  }

}
