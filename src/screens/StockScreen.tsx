import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StockActualScreen } from './StockActualScreen';
import { StockDiscontinuadoScreen } from './StockDiscontinuadoScreen';
import { StockTabParamList } from '../types';

const Tab = createMaterialTopTabNavigator<StockTabParamList>();

export function StockScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: '#666',
        tabBarIndicatorStyle: { backgroundColor: '#2196F3' },
        tabBarStyle: { backgroundColor: 'white' },
        tabBarLabelStyle: { textTransform: 'none' },
      }}
    >
      <Tab.Screen
        name="Actual"
        component={StockActualScreen}
        options={{
          title: 'Actual',
        }}
      />
      <Tab.Screen
        name="Discontinuado"
        component={StockDiscontinuadoScreen}
        options={{
          title: 'Discontinuado',
        }}
      />
    </Tab.Navigator>
  );
} 