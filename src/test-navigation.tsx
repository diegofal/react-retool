import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function TestScreen1() {
  return null;
}

function TestScreen2() {
  return null;
}

export function TestNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Screen1" component={TestScreen1} />
        <Tab.Screen name="Screen2" component={TestScreen2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
} 