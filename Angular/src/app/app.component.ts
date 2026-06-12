import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Item, Service } from './app.service';
import { PointInfo, PointConfiguration, ChartAttributes } from './chart.types';
import { DxChartModule } from 'devextreme-angular/ui/chart';

@Component({
  selector: 'app-root',
  imports: [DxChartModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  providers: [Service],
})
export class AppComponent {
  dataSource: Item[] | null;

  chartAttributes: ChartAttributes;

  constructor(service: Service) {
    this.dataSource = service.getDataSource();
    this.chartAttributes = {
      class: 'chart-class',
    };
  }

  customizePoint(info: PointInfo): PointConfiguration {
    const style: PointConfiguration = {};

    switch (info.argument) {
      case 'Monday':
        style.color = 'url(#Gradient1)';
        break;
      case 'Tuesday':
        style.color = 'url(#Gradient2)';
        break;
      case 'Wednesday':
        style.color = 'url(#Gradient3)';
        break;
      case 'Thursday':
        style.color = 'url(#Pattern1)';
        break;
      case 'Friday':
        style.color = 'url(#PointImage)';
        break;
      case 'Saturday':
        style.color = 'url(#TriangleSvg)';
        break;
      default:
        break;
    }
    return style;
  }
}
