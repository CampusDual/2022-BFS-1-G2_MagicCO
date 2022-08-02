import { Component, Inject, Injector, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService, OntimizeService } from 'ontimize-web-ngx';


@Component({
  selector: 'app-shops-home',
  templateUrl: './shops-home.component.html',
  styleUrls: ['./shops-home.component.css']
})
export class ShopsHomeComponent implements OnInit {

  constructor(
    protected dialog: MatDialog,
    protected sanitizer: DomSanitizer,
    @Inject(AuthService) private authService: AuthService,
    @Inject(OntimizeService) private service: OntimizeService,
    protected injector: Injector
  ) {
     this.service = this.injector.get(OntimizeService);
  }

  protected configureService() {
    const conf = this.service.getDefaultServiceConfiguration('shops');
    this.service.configureService(conf);
  }

  ngOnInit() {
    this.configureService();
    this.service.query ({
      'user_id': this.authService.getSessionInfo().user
    },[
      'id_shop','name','region','longitude','latitude','description','start_date','user_id'
    ],
    'shop'
    ).subscribe(resp => {
      if (resp.code === 0) {

        // resp.data contains the data retrieved from the server

      } else {
        alert('Impossible to delete data!');
      }
    });
  }



}
