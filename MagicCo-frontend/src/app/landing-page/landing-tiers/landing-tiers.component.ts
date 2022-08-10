import { Component, Inject, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { AuthService, OGridComponent, OListComponent, OntimizeService } from 'ontimize-web-ngx';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-landing-tiers',
  templateUrl: './landing-tiers.component.html',
  styleUrls: ['./landing-tiers.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class LandingTiersComponent implements OnInit {

  @ViewChildren('tiersServices', { read: OListComponent }) public oListTierServices: QueryList<OListComponent>;
  @ViewChild('tiers', { read: OGridComponent, static: false }) public ogridTiers: OGridComponent;

  planAnnual: boolean = true;
  observable;

  constructor(
    @Inject(AuthService) private authService: AuthService,
    @Inject(OntimizeService) private service: OntimizeService

  ) { }

  protected configureService() {
    const conf = this.service.getDefaultServiceConfiguration('subscriptions');
    this.service.configureService(conf);
  }

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      localStorage.clear;
      localStorage.setItem('com.ontimize.web.ngx.jee.seed', '{"lang":"en","session":{"user":"test","id":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGlvbi10aW1lIjoxNjU4ODIyMDAwNjY3LCJ1c2VybmFtZSI6InRlc3QifQ.a_t2uM1g0prqJimVpQJGbt713FveeB7AjE1ITwQEApQ"},"users":{"test":{"components":{"nav_service":"eyIwIjp7InVybCI6Ii9sYW5kaW5nLXBhZ2UiLCJxdWVyeVBhcmFtcyI6e319LCIxIjp7InVybCI6Ii9sb2dpbiIsInF1ZXJ5UGFyYW1zIjp7InNlc3Npb24tZXhwaXJlZCI6ImZhbHNlIn19LCIyIjp7InVybCI6Ii9sYW5kaW5nLXBhZ2UiLCJxdWVyeVBhcmFtcyI6e319LCIzIjp7InVybCI6Ii9sb2dpbiIsInF1ZXJ5UGFyYW1zIjp7InNlc3Npb24tZXhwaXJlZCI6ImZhbHNlIn19LCI0Ijp7InVybCI6Ii9sYW5kaW5nLXBhZ2UiLCJxdWVyeVBhcmFtcyI6e319fQ==","servicesTable_/landing-page":"eyJzb3J0LWNvbHVtbnMiOiIiLCJvQ29sdW1ucy1kaXNwbGF5IjpbeyJhdHRyIjoiaWRfc2VydmljZSIsInZpc2libGUiOmZhbHNlfSx7ImF0dHIiOiJuYW1lIiwidmlzaWJsZSI6dHJ1ZSwid2lkdGgiOiJhdXRvIn1dLCJzZWxlY3QtY29sdW1uLXZpc2libGUiOmZhbHNlLCJvQ29sdW1ucyI6W3siYXR0ciI6ImlkX3NlcnZpY2UiLCJzZWFyY2hhYmxlIjp0cnVlLCJzZWFyY2hpbmciOnRydWV9LHsiYXR0ciI6Im5hbWUiLCJzZWFyY2hhYmxlIjp0cnVlLCJzZWFyY2hpbmciOnRydWV9XSwiZmlsdGVyLWNhc2Utc2Vuc2l0aXZlIjpmYWxzZSwicXVlcnktcm93cyI6MjUsInNlbGVjdGlvbiI6W10sImluaXRpYWwtY29uZmlndXJhdGlvbiI6eyJvQ29sdW1ucy1kaXNwbGF5IjpbeyJhdHRyIjoibmFtZSIsInZpc2libGUiOnRydWV9XSwic2VsZWN0LWNvbHVtbi12aXNpYmxlIjpmYWxzZSwiZmlsdGVyLWNhc2Utc2Vuc2l0aXZlIjpmYWxzZSwicXVlcnktcm93cyI6MjUsImZpbHRlci1jb2x1bW4tYWN0aXZlLWJ5LWRlZmF1bHQiOnRydWUsImZpbHRlci1jb2x1bW5zIjpbXSwiZ3JvdXBlZC1jb2x1bW5zIjpbXX0sImZpbHRlci1jb2x1bW5zIjpbXSwiZ3JvdXBlZC1jb2x1bW5zIjpbXSwidXNlci1zdG9yZWQtZmlsdGVycyI6W10sInVzZXItc3RvcmVkLWNvbmZpZ3VyYXRpb25zIjpbXX0="}}}}');
    }

  }

  ngAfterViewChecked() {
   const subscription = of(this.ogridTiers.dataArray).subscribe((value => this.completeData(value)))
   subscription.unsubscribe()
  }

  completeData(data) {
    data.forEach((tier, index) => {
      let filter = {
      "id_subscription": tier['id_subscription']
    }
    this.oListTierServices.toArray()[index].queryData(filter)
    })
  }

  prices(event: any){
    if(event.value == "month"){
      this.planAnnual = false;
    }else if (event.value == "year"){
      this.planAnnual = true;
    }

  }


}
