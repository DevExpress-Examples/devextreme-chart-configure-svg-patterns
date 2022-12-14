import { Component } from "@angular/core";
import { Item, Service } from './app.service';

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
  }

  customizePoint(info: any) {
    let style: any = {};

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
