import { Component, Injector, OnInit } from '@angular/core';
import { Inject } from "@angular/core";
import { inject } from '@angular/core/testing';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService, OntimizeService } from "ontimize-web-ngx";
import { LandingServiceDetailComponent } from '../landing-service-detail/landing-service-detail.component';


@Component({
  selector: 'app-landing-services',
  templateUrl: './landing-services.component.html',
  styleUrls: ['./landing-services.component.css']
})


export class LandingServicesComponent implements OnInit  {

  //@ViewChild('sstable', { read: OTableComponent, static: true }) public sstable: OTableComponent;
  constructor(
    protected dialog: MatDialog,
    protected sanitizer: DomSanitizer,
    @Inject(AuthService) private authService: AuthService,
    @Inject(OntimizeService) private service: OntimizeService,
    // protected injector: Injector
  ) {
    // this.service = this.injector.get(OntimizeService);
  }

  protected configureService() {
    const conf = this.service.getDefaultServiceConfiguration('services');
    this.service.configureService(conf);
  }

  ngOnInit() {
    // this.configureService();
    if (!this.authService.isLoggedIn()) {
      localStorage.clear;
      localStorage.setItem('com.ontimize.web.ngx.jee.seed', '{"lang":"en","session":{"user":"test","id":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGlvbi10aW1lIjoxNjU4ODIyMDAwNjY3LCJ1c2VybmFtZSI6InRlc3QifQ.a_t2uM1g0prqJimVpQJGbt713FveeB7AjE1ITwQEApQ"},"users":{"test":{"components":{"nav_service":"eyIwIjp7InVybCI6Ii9sYW5kaW5nLXBhZ2UiLCJxdWVyeVBhcmFtcyI6e319LCIxIjp7InVybCI6Ii9sb2dpbiIsInF1ZXJ5UGFyYW1zIjp7InNlc3Npb24tZXhwaXJlZCI6ImZhbHNlIn19LCIyIjp7InVybCI6Ii9sYW5kaW5nLXBhZ2UiLCJxdWVyeVBhcmFtcyI6e319LCIzIjp7InVybCI6Ii9sb2dpbiIsInF1ZXJ5UGFyYW1zIjp7InNlc3Npb24tZXhwaXJlZCI6ImZhbHNlIn19LCI0Ijp7InVybCI6Ii9sYW5kaW5nLXBhZ2UiLCJxdWVyeVBhcmFtcyI6e319fQ==","servicesTable_/landing-page":"eyJzb3J0LWNvbHVtbnMiOiIiLCJvQ29sdW1ucy1kaXNwbGF5IjpbeyJhdHRyIjoiaWRfc2VydmljZSIsInZpc2libGUiOmZhbHNlfSx7ImF0dHIiOiJuYW1lIiwidmlzaWJsZSI6dHJ1ZSwid2lkdGgiOiJhdXRvIn1dLCJzZWxlY3QtY29sdW1uLXZpc2libGUiOmZhbHNlLCJvQ29sdW1ucyI6W3siYXR0ciI6ImlkX3NlcnZpY2UiLCJzZWFyY2hhYmxlIjp0cnVlLCJzZWFyY2hpbmciOnRydWV9LHsiYXR0ciI6Im5hbWUiLCJzZWFyY2hhYmxlIjp0cnVlLCJzZWFyY2hpbmciOnRydWV9XSwiZmlsdGVyLWNhc2Utc2Vuc2l0aXZlIjpmYWxzZSwicXVlcnktcm93cyI6MjUsInNlbGVjdGlvbiI6W10sImluaXRpYWwtY29uZmlndXJhdGlvbiI6eyJvQ29sdW1ucy1kaXNwbGF5IjpbeyJhdHRyIjoibmFtZSIsInZpc2libGUiOnRydWV9XSwic2VsZWN0LWNvbHVtbi12aXNpYmxlIjpmYWxzZSwiZmlsdGVyLWNhc2Utc2Vuc2l0aXZlIjpmYWxzZSwicXVlcnktcm93cyI6MjUsImZpbHRlci1jb2x1bW4tYWN0aXZlLWJ5LWRlZmF1bHQiOnRydWUsImZpbHRlci1jb2x1bW5zIjpbXSwiZ3JvdXBlZC1jb2x1bW5zIjpbXX0sImZpbHRlci1jb2x1bW5zIjpbXSwiZ3JvdXBlZC1jb2x1bW5zIjpbXSwidXNlci1zdG9yZWQtZmlsdGVycyI6W10sInVzZXItc3RvcmVkLWNvbmZpZ3VyYXRpb25zIjpbXX0="}}}}');
    }

  }

  deleteItem(table: any) {
    const conf = this.service.getDefaultServiceConfiguration('services');
    this.service.configureService(conf);
    const filter = {
      "id_service" : table[0].id_service
    };
    // console.log(filter);
    // console.log (this.authService.getSessionInfo().user);
    this.service.delete(filter, 'service').subscribe(resp => {
      if (resp.code === 0) {

        // resp.data contains the data retrieved from the server

      } else {
        alert('Impossible to delete data!');
      }
    });
  }

  public getImageSrc(base64: any): any {
    return base64 ? this.sanitizer.bypassSecurityTrustResourceUrl('data:image/*;base64,' + base64.bytes) : './assets/images/no-image-transparent.png';
  }


  public openDetail(data: any): void {
    this.dialog.open(LandingServiceDetailComponent, {
      height: '630px',
      width: '365px',
      data: data
    });
  }
  over(){
    console.log("Mouseover called");
  }

  out(){
    console.log("Mouseout called");
  }
}



