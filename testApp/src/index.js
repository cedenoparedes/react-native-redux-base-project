import React from 'react';
import {View, Text, Button} from 'react-native';
import {Provider} from 'react-redux';
import Login from './component/login';
import configureStore from './configureStore';

let store = configureStore();
const Index = props => {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
};

export default Index;
