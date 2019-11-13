import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import SuperHeroesList from './component/superHeroesList';
import configureStore from './configureStore';

let store = configureStore();
const Index = () => {
  return (
    <Provider store={store}>
      <View>
        <SuperHeroesList />
      </View>
    </Provider>
  );
};

export default Index;
