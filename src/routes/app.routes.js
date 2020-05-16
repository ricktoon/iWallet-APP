import React from 'react';
import { View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import New from '../pages/New';

const AppTab = createMaterialBottomTabNavigator();

function AppRoutes(){
  return(
    <AppTab.Navigator
    activeColor="#1E90FF"
    inactiveColor="#FFF"
    barStyle={{backgroundColor:'#012631',
    elevation: 1
    
    }}
    screenOptions={({ route })=>({
      tabBarIcon:({color, size, focused})=>{
        const icons ={
          Home:'home',
          Perfil:'account-circle',
          Registrar:'add-shopping-cart'
        };
        let iconName;

        if (route.name === 'Home'){
          iconName = focused ? '#1E90FF' : '#FFF';
        }else if(route.name === 'Perfil'){
          iconName = focused ? '#1E90FF' : '#FFF';
        }else if (route.name === 'Registrar'){
          iconName = focused ? '#1E90FF' : '#FFF';
        }
        return(
          <Icon
          name={icons[route.name]}
          color={iconName}
          size={26}
          />
        )
      }
    })}
    
    >
      <AppTab.Screen  name="Home" component={Home}/>
      <AppTab.Screen name="Registrar" component={New}/>
      <AppTab.Screen name="Perfil" component={Profile}/>
 
    </AppTab.Navigator>
  );
}

export default AppRoutes;