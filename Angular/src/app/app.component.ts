import { Component, ViewChild } from "@angular/core";

import {DxDataGridComponent, DxDataGridModule} from 'devextreme-angular';

import { Item, Service } from './app.service';
import DevExpress from "devextreme";
import dxDataGrid = DevExpress.ui.dxDataGrid;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [Service]
})
export class AppComponent {
  dataSource: Item[] | null;
  chartAttributes: any;

  constructor(service: Service) {
    this.dataSource = service.getDataSource();
    this.chartAttributes = {
      class: "chart-class"
    };
    this.customizePoint = this.customizePoint.bind(this);
  }

  customizePoint(info: any) {
    let style: any = {};
    console.log(info)
    switch(info.argument) {
      case 'Monday':
        style.color = 'url(#Gradient1)'
        break;
      case 'Tuesday':
        style.color = 'url(#Gradient2)'
        break;
      case 'Wednesday':
        style.color = 'url(#Gradient3)'
        break;
      case 'Thursday':
        style.color = 'url(#Pattern1)'
        break;
      case 'Friday':
        style.color = 'url(#PointImage)'
        break;
      case 'Saturday':
        style.color = 'url(#TriangleSvg)'
        break;
      default:
        break;
    }
    return style;
  }
}
