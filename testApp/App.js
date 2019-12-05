/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SuperHeroesList from './src/component/superHeroesList';
import Login from './src/component/login';
import {Provider} from 'react-redux';
import configureStore from './src/configureStore';

const AppNavigator = createStackNavigator(
  {
    Home: {screen: Login},
    SuperHeroesList: {screen: SuperHeroesList},
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const Navigation = createAppContainer(AppNavigator);

const App = props => {
  let store = configureStore();
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default () => {
  return App();
};
