import React from 'react';
import {Text, TabBarIOS} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../acctions';
import SuperHeroesList from './superHeroesList';

const TabBarList = props => {
  console.log(props);
  return (
    <TabBarIOS
      barTintColor="white"
      tintColor="black"
      unselectedTintColor="grey">
      <TabBarIOS.Item
        title="tab 1"
        onPress={() => props.selected_tab('TAB_1')}
        selected={() => props.tabId === 'TAB_1'}>
        <SuperHeroesList />
      </TabBarIOS.Item>
      <TabBarIOS.Item
        title="tab 2"
        onPress={() => props.selected_tab('TAB_2')}
        selected={() => props.tabId === 'TAB_2'}>
        <Text>TAB_2</Text>
      </TabBarIOS.Item>
      <TabBarIOS.Item
        title="tab 3"
        onPress={() => props.selected_tab('TAB_3')}
        selected={() => props.tabId === 'TAB_3'}>
        <Text>TAB_3</Text>
      </TabBarIOS.Item>
    </TabBarIOS>
  );
};

const mapStateToProps = state => {
  return {
    tabId: state.tabId,
  };
};
export default connect(
  mapStateToProps,
  actions,
)(TabBarList);
