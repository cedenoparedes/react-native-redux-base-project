/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Index from './src/index';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SuperHeroesList from './src/component/superHeroesList';
import Login from './src/component/login';

const AppNavigator = createStackNavigator(
  {
    Home: {screen: Login},
    SuperHeroesList: {screen: SuperHeroesList},
  },
  {
    initialRouteName: 'Home',
  },
);

const App = createAppContainer(AppNavigator);

export default App;
