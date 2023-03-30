import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens';

import ScanScreen from '../screens/ScanScreen';
import ScannedItems from '../screens/ScannedItems';
import DeleteorUpdate from '../screens/DeleteOrUpdate';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Scan' component={ScanScreen}/>
      <Stack.Screen name='ScannedItems' component={ScannedItems}/>
      <Stack.Screen name='DeleteOrUpdate' component={DeleteorUpdate}/> 
    </Stack.Navigator>
  );
};
