import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome } from '@expo/vector-icons';

import { CuentasCorrienteScreen } from '../screens/CuentasCorrienteScreen';
import { FacturasScreen } from '../screens/FacturasScreen';
import { StockScreen } from '../screens/StockScreen';
import { MainTabParamList } from '../types';

const Tab = createMaterialTopTabNavigator<MainTabParamList>();

export function Navigation() {
  return (
    <NavigationContainer>
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
          name="CuentasCorriente"
          component={CuentasCorrienteScreen}
          options={{
            title: 'Cuentas Corriente',
            tabBarIcon: ({ color }: { color: string }) => (
              <FontAwesome name="users" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Facturas"
          component={FacturasScreen}
          options={{
            title: 'Facturas',
            tabBarIcon: ({ color }: { color: string }) => (
              <FontAwesome name="file-text-o" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Stock"
          component={StockScreen}
          options={{
            title: 'Stock',
            tabBarIcon: ({ color }: { color: string }) => (
              <FontAwesome name="cube" size={20} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
} 