import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducers from './reducers';
import SuperHeroesList from './component/superHeroesList';
const Index = () => {
  return (
    <Provider store={createStore(Reducers)}>
      <View>
        <SuperHeroesList />
      </View>
    </Provider>
  );
};

export default Index;
