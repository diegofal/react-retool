import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import {
  VictoryChart,
  VictoryLine,
  VictoryPie,
  VictoryAxis,
  VictoryTheme,
  VictoryLabel,
} from 'victory-native';

interface LineChartProps {
  data: Array<{ x: string | number; y: number }>;
  xLabel?: string;
  yLabel?: string;
  color?: string;
  height?: number;
}

interface PieChartProps {
  data: Array<{ x: string; y: number }>;
  colorScale?: string[];
  height?: number;
  width?: number;
}

export const LineChart: React.FC<LineChartProps> = ({
  data,
  xLabel,
  yLabel,
  color = '#2196F3',
  height = 300,
}) => {
  return (
    <View style={[styles.container, { height }]}>
      <VictoryChart
        theme={VictoryTheme.material}
        height={height}
        padding={{ top: 20, bottom: 50, left: 50, right: 20 }}
      >
        <VictoryAxis
          label={xLabel}
          style={{
            axisLabel: { padding: 35 },
            tickLabels: { angle: -45, fontSize: 10 },
          }}
        />
        <VictoryAxis
          dependentAxis
          label={yLabel}
          style={{
            axisLabel: { padding: 40 },
            tickLabels: { fontSize: 10 },
          }}
        />
        <VictoryLine
          data={data}
          style={{
            data: { stroke: color },
          }}
          animate={{
            duration: 500,
            onLoad: { duration: 500 },
          }}
        />
      </VictoryChart>
    </View>
  );
};

export const PieChart: React.FC<PieChartProps> = ({
  data,
  colorScale = ['#2196F3', '#4CAF50', '#FFC107', '#F44336', '#9C27B0'],
  height = 300,
  width = Dimensions.get('window').width - 32,
}) => {
  return (
    <View style={[styles.container, { height }]}>
      <VictoryPie
        data={data}
        colorScale={colorScale}
        height={height}
        width={width}
        padding={50}
        innerRadius={70}
        labelRadius={({ innerRadius }) => (innerRadius as number) + 40}
        style={{ labels: { fill: 'white', fontSize: 12, fontWeight: 'bold' } }}
        animate={{
          duration: 500,
          onLoad: { duration: 500 },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
}); 