import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { View, StatusBar} from 'react-native';
import firebase from './src/service/firebaseConnection'
import Routes from './src/routes';

export default function CarteiraAPP() {
 return (
  <NavigationContainer>
    <StatusBar backgroundColor="#001d26" barStyle="light-content"/>
    <Routes/>
  </NavigationContainer>
 )
}