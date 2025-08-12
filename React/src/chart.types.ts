export interface PointInfo {
  argument: string | number | Date;
  value: number;
  tag?: any;
  seriesName?: string;
  index: number;
  data: any;
}

export interface PointConfiguration {
  color?: string;
  border?: {
    color?: string;
    width?: number;
    dashStyle?: string;
  };
  hoverStyle?: {
    color?: string;
    border?: {
      color?: string;
      width?: number;
    };
  };
  selectionStyle?: {
    color?: string;
    border?: {
      color?: string;
      width?: number;
    };
  };
  size?: number;
  symbol?: any;
  visible?: boolean;
}

export interface ChartAttributes {
  [key: string]: any;
  class?: string;
  id?: string;
  style?: string;
}
