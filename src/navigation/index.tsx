import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

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
            tabBarIcon: ({ color }) => (
              <Icon name="user-friends" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Facturas"
          component={FacturasScreen}
          options={{
            title: 'Facturas',
            tabBarIcon: ({ color }) => (
              <Icon name="file-invoice-dollar" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Stock"
          component={StockScreen}
          options={{
            title: 'Stock',
            tabBarIcon: ({ color }) => (
              <Icon name="box-open" size={20} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
} 