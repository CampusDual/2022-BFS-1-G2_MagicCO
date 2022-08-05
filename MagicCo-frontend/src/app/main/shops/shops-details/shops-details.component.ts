import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ODateInputComponent, OntimizeService, OTableCellEditorDateComponent, OTableComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-shops-details',
  templateUrl: './shops-details.component.html',
  styleUrls: ['./shops-details.component.css']
})
export class ShopsDetailsComponent implements OnInit {

  @ViewChild('shopSubscriptionTable', { static: false })
  private subscriptionTable: OTableComponent;

  @ViewChild('ssd', { static: false })
  private ssd: OTableCellEditorDateComponent;

  public subscriptionId;

  constructor(
    private router: Router,
    @Inject(OntimizeService) private service: OntimizeService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    this.actRoute.params.subscribe(params => {
      this.subscriptionId = params['id'];
      console.log(this.subscriptionId);
      alert(this.subscriptionId)
      }); 
    this.checkSubscriptionStatus();
  }

  checkSubscriptionStatus() {
    console.log(this.ssd);
    alert(this.ssd);
    let dateTime = new Date();
    this.subscriptionTable.getValue();
    // console.log(this.subscriptionTable.dataArray.forEach( item => {
    //   if(item['status'] === 'Activo') {
    //     alert(dateTime);
    //   }
    // }

    // ))
    // if (this.subscriptionTable.dataArray.filter((dataObject:any) => 'statusa' in dataObject)) {

    // };


  }

}
