import {combineReducers} from 'redux';
import superheroesReducer from './superheroeReducer';
import tabBarReducer from './tabBarReducer';
import dataReducer from './dataReducer';
export default combineReducers({
  superHeroes: superheroesReducer,
  tabId: tabBarReducer,
  dataReducer: dataReducer,
});
