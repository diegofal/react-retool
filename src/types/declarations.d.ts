declare module 'react-native-vector-icons/FontAwesome' {
  import { Component } from 'react';
  import { TextStyle } from 'react-native';

  interface IconProps {
    name: string;
    size?: number;
    color?: string;
    style?: TextStyle;
  }

  export default class Icon extends Component<IconProps> {}
}

declare module 'react-native-chart-kit' {
  import { ViewStyle } from 'react-native';

  interface ChartProps {
    data: {
      labels?: string[];
      datasets?: {
        data: number[];
        color?: (opacity: number) => string;
        strokeWidth?: number;
      }[];
    };
    width?: number;
    height?: number;
    chartConfig?: {
      backgroundColor?: string;
      backgroundGradientFrom?: string;
      backgroundGradientTo?: string;
      decimalPlaces?: number;
      color?: (opacity: number) => string;
      labelColor?: (opacity: number) => string;
      style?: ViewStyle;
      propsForDots?: {
        r?: string;
        strokeWidth?: string;
        stroke?: string;
      };
    };
    bezier?: boolean;
    style?: ViewStyle;
  }

  export class LineChart extends React.Component<ChartProps> {}
  export class BarChart extends React.Component<ChartProps> {}
  export class PieChart extends React.Component<ChartProps> {}
} 