import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DialogService, Observable, OntimizeService, OTableComponent } from 'ontimize-web-ngx';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-subscriptionlist',
  templateUrl: './subscriptionlist.component.html',
  styleUrls: ['./subscriptionlist.component.css']
})
export class SubscriptionlistComponent implements OnInit {
public subscriptionId;

  constructor(private http: HttpClient,
    private router: Router,
    @Inject(OntimizeService) private service: OntimizeService,private actRoute: ActivatedRoute,
    protected dialogService: DialogService) { }
  ngOnInit(): void {
      this.actRoute.params.subscribe(params => {
      this.subscriptionId = params['id'];
      });
  }
  //reload table revisar
  public Incluir(table: any) {
    // https://ontimizeweb.github.io/docs/v8/guide/service/
    var data = {
       "id_subscription": this.subscriptionId,
       "id_service":table.getSelectedItems()[0].id_service
      }
    this.service.configureService(this.service.getDefaultServiceConfiguration("subscriptionsservice"));
        this.service.insert(data, 'subscriptionServiceService').subscribe(resp => {
          if (resp.code === 0) {
           this.avisar();

          } else {
            
        
          }
        });

        
  }
  public avisar() {
    if (this.dialogService) {
      this.dialogService.info('Servicios',
        'Ha insertado correctamente"');
    }
  }
  public volver(){
    this.router.navigateByUrl('/main/subscriptions');
  }
}
