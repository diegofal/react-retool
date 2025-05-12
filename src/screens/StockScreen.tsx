import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StockActualScreen } from './StockActualScreen';
import { StockDiscontinuadoScreen } from './StockDiscontinuadoScreen';

const Tab = createMaterialTopTabNavigator();

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
          title: 'Stock Actual',
        }}
      />
      <Tab.Screen
        name="Discontinuado"
        component={StockDiscontinuadoScreen}
        options={{
          title: 'Stock Discontinuado',
        }}
      />
    </Tab.Navigator>
  );
} 