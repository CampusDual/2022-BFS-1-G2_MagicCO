import { ChangeDetectorRef, Component, Inject, Injector, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService, Expression, FilterExpressionUtils, OntimizeService, OTableComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-settings-home',
  templateUrl: './settings-home.component.html',
  styleUrls: ['./settings-home.component.css']
})
export class SettingsHomeComponent implements OnInit {
  private userTable: OTableComponent;

  constructor(
    @Inject(AuthService) private authService: AuthService,
    @Inject(OntimizeService) private userService: OntimizeService,
    protected injector: Injector,
    private actRoute: ActivatedRoute
  ) {
    this.userService = this.injector.get(OntimizeService);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.configureService();
    this.userTable.queryData({
      'user_id': this.authService.getSessionInfo().user
    })

  }
  configureService() {
    throw new Error('Method not implemented.');
  }

}
