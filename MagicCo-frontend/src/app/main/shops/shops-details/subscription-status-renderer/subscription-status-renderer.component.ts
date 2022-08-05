import { Component, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { OBaseTableCellRenderer, OTranslateService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-subscription-status-renderer',
  templateUrl: './subscription-status-renderer.component.html',
  styleUrls: ['./subscription-status-renderer.component.css']
})
export class SubscriptionStatusRendererComponent extends OBaseTableCellRenderer implements OnInit {


  @ViewChild('statusColor', { read: TemplateRef, static: false }) public statusColor: TemplateRef<any>;

  constructor(protected injector: Injector) {
    super(injector);
  }

  getCellData(cellvalue: any, rowvalue?: any): string {
    let newString:string;
    if(cellvalue === 'Activo') {
      return newString="!!!!";
    } else {
      return newString="____";
    }
  }

  // getCellData(value: any) {
  //   const translatedCellData = this.translateService.get(value);
  //   // const typesList = document.querySelectorAll('.nvd3.nv-legend .nv-series text');
  //   // for (let i = 0, len = typesList.length; i < len; i++) {
  //   //   if (typesList[i].innerHTML === translatedCellData) {
  //   //     const circle: any = typesList[i].parentElement.children[0];
  //   //     if (circle) {
  //   //       this.color = circle.style.fill;
  //   //     }
  //   //   }
  //   // }
  //   return this.translateService.get(value);
  // }

  // get color(): string {
  //   return this._color;
  // }

  // set color(arg: string) {
  //   this._color = arg;
  // }

  ngOnInit() {
  }

}
