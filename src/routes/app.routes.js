import React from 'react';
import { View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';

const AppStack = createStackNavigator();

function AppRoutes(){
  return(
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home}/>
    </AppStack.Navigator>
  );
}

export default AppRoutes;