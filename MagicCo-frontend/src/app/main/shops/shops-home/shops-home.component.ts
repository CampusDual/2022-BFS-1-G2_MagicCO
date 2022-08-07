import { ChangeDetectorRef, Component, Inject, Injector, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService, Expression, FilterExpressionUtils, OntimizeService, OTableComponent } from 'ontimize-web-ngx';


@Component({
  selector: 'app-shops-home',
  templateUrl: './shops-home.component.html',
  styleUrls: ['./shops-home.component.css']
})
export class ShopsHomeComponent implements OnInit {
    public id_shop1: any;
    public name1: any;
    public region1: any;

    private userID;

    @ViewChild('shopsTable', { static: false })
    private shopsTable: OTableComponent;
    private data;

  constructor(
    private cd: ChangeDetectorRef,
    @Inject(AuthService) private authService: AuthService,
    @Inject(OntimizeService) private shopService: OntimizeService,
    protected injector: Injector,
    private actRoute: ActivatedRoute
  ) {
    this.userID = this.authService.getSessionInfo().user;
    this.shopService = this.injector.get(OntimizeService);
  }

  protected configureService() {
    const conf = this.shopService.getDefaultServiceConfiguration('shops');
    this.shopService.configureService(conf);
  }

  ngOnInit() {
    this.configureService();
    // this.setCurrentUserIdFilter();
  }

  ngAfterViewInit() {
    this.configureService();
    this.shopsTable.queryData({
      'user_id': this.authService.getSessionInfo().user
    })
  }

  setCurrentUserIdFilter() {
    // console.log(this.shopsTable);


    // this.shopsTable.queryData(basicExpr);

    // this.shopsTable.queryData(FilterExpressionUtils.buildBasicExpression(
    //   FilterExpressionUtils.buildExpressionEquals('user_id', 'user')
    // ),
    // { sqltypes: { id_shop: 4, name: 12, region: 12, longitude: 2, latitude: 2, description: 12, start_date: 93, user_id: 12} });

  //   this.shopService.query ({
  //     'user_id': this.authService.getSessionInfo().user
  //   },[
  //     'id_shop','name','region','longitude','latitude','description','start_date','user_id'
  //   ],
  //   'shop'
  //   ).subscribe(resp => {

  //     //Como devolver la query a html?

  //     // if (resp.data) {
  //     //   console.log(resp.data);
  //     //   alert();
  //     //   this.id_shop1 = resp.data.filter((e: any) => e['id_shop']);
  //     //   this.name1 = resp.data.filter((e: any) => e['name']);
  //     //   this.region1 = resp.data.filter((e: any) => e['region'])
  //     // }

  //     },
  //   err => console.log(err),
  //   () => this.cd.detectChanges()
  // );
  }

  createFilter(values: Array<{ attr, value }>): Expression {

    let filters = [];
    values.forEach(fil => {
      if (fil.value === 'user' && fil.attr === "user_id") {
        filters.push(FilterExpressionUtils.buildExpressionEquals(fil.attr, fil.value))
      }
    });
    let ce: Expression;
    if (filters.length > 0) {
      ce = filters.reduce((exp1, exp2) => FilterExpressionUtils.buildComplexExpression(exp1, exp2, FilterExpressionUtils.OP_AND));
    }

    return ce;
    // this.listAccount.queryData(FilterExpressionUtils.buildBasicExpression(ce), { sqltypes: { STARTDATE: 93, ENDDATE: 93, ACCOUNTTYPEID: 4, BALANCE: 8 } });

  }

  // createFilter(values: Array<{ attr, value }>): Expression {
  //   // Prepare simple expressions from the filter components values
  //   // let filters: Array<Expression> = [];
  //   const filters: Expression[] = [];

  //   const userName = this.authService.getSessionInfo().user;
  //   values.forEach(fil => {
  //     if (fil.attr === 'user_id' && fil.value === userName) {
  //       console.log (fil.attr + ' ' + fil.value);
  //       alert();
  //       // return FilterExpressionUtils.buildExpressionLike('user_id', 'user');
  //       // return filters.reduce(FilterExpressionUtils.buildExpressionEquals(fil.attr, fil.value));
  //       // if (fil.attr === 'EMPLOYEENAME' || fil.attr === 'EMPLOYEESURNAME') {
  //       //   filters.push(FilterExpressionUtils.buildExpressionLike(fil.attr, fil.value));
  //       // }
  //       // if (fil.attr === 'EMPLOYEETYPEID') {
  //       //   filters.push(FilterExpressionUtils.buildExpressionEquals(fil.attr, fil.value));
  //       // }
  //     }
  //   });
  //   if (filters.length = 0) {
  //     return null
  //   } else {
  //     return null;
  //   }
  // }
}

