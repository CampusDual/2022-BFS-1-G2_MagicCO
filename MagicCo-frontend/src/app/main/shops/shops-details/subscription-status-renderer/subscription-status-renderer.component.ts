import { Component, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { OBaseTableCellRenderer, OTranslateService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-subscription-status-renderer',
  templateUrl: './subscription-status-renderer.component.html',
  styleUrls: ['./subscription-status-renderer.component.css']
})
export class SubscriptionStatusRendererComponent extends OBaseTableCellRenderer implements OnInit {


  @ViewChild('templateref', { read: TemplateRef, static: false }) public templateref: TemplateRef<any>;

  constructor(protected injector: Injector) {
    super(injector);
  }

  getCellData(cellvalue: any, rowvalue?: any): string {
    // will call when status will be changes on numbers
    let newString:string;
    if(cellvalue === '0') {
      return newString="Activo";
    } else if (cellvalue === '1'){
      return newString="Terminado";
    }
    else {
      return newString="Planificado";
    }
  }

  ngOnInit() {
  }

}
