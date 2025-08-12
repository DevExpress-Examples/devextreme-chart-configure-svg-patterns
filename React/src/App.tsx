import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import Chart, {
  Series,
  Legend,
  CommonPaneSettings,
  Size,
} from 'devextreme-react/chart';
import { dataService } from './data.service';
import type { PointInfo, PointConfiguration, ChartAttributes } from './chart.types';
import img from './images/image.jpg';

const chartAttributes: ChartAttributes = {
  class: 'chart',
};

function customizePoint(pointInfo: PointInfo): PointConfiguration {
  const info: PointConfiguration = {};
  switch (pointInfo.argument) {
    case 'Monday':
      info.color = 'url(#Gradient1)';
      break;
    case 'Tuesday':
      info.color = 'url(#Gradient2)';
      break;
    case 'Wednesday':
      info.color = 'url(#Gradient3)';
      break;
    case 'Thursday':
      info.color = 'url(#Pattern1)';
      break;
    case 'Friday':
      info.color = 'url(#PointImage)';
      break;
    case 'Saturday':
      info.color = 'url(#TriangleSvg)';
      break;
    default:
      break;
  }
  return info;
}

function App(): JSX.Element {
  return (
    <div className="dx-viewport" id="chart-container">
      <svg className="svg-patterns">
        <defs>
          <pattern id="Gradient1" patternUnits="userSpaceOnUse" width="4" height="4">
            <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" stroke="black" strokeWidth={1} />
          </pattern>
          <linearGradient id="Gradient2" x1="0" x2="1" y1="0" y2="0">
            <stop offset="40%" stopColor="pink" />
            <stop offset="80%" stopColor="blue" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="Gradient3">
            <stop offset="40%" stopColor="pink" />
            <stop offset="80%" stopColor="blue" stopOpacity="0.2" />
          </radialGradient>
          <pattern id="Pattern1" patternUnits="userSpaceOnUse" x="0" y="0" width="10" height="10">
            <path d="M 0 0 L 10 0 L 5 10 z" fill="pink" stroke="blue" />
            <rect x="5" y="5" width="5" height="5" fill="orange" />
          </pattern>
          <pattern id="PointImage" patternContentUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
            <image preserveAspectRatio="none" href={img} width="300" height="200" />
          </pattern>
          <pattern id="TriangleSvg" patternContentUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
            <path preserveAspectRatio="none" d="M 0 0 L 180 0 L 100 370 z" fill="pink" stroke="blue" />
          </pattern>
          <linearGradient id="Background" x1="0" x2="1" y1="0" y2="0">
            <stop offset="40%" stopColor="rgba(0, 174, 239, .5)" />
            <stop offset="80%" stopColor="rgb(3, 138, 255)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
      <Chart
        elementAttr={chartAttributes}
        dataSource={dataService.getDataSource()}
        customizePoint={customizePoint}>
        <Size height={440} />
        <Series
          argumentField="day"
          valueField="count"
          type="bar"
          hoverMode='none'
        />
        <CommonPaneSettings
          backgroundColor='url(#Background)' />
        <Legend
          visible={false} />
      </Chart>
    </div>
  );
}

export default App;
