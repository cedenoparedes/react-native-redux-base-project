import {combineReducers} from 'redux';
import superheroesReducer from './superheroeReducer';

export default combineReducers({
  superHeroes: superheroesReducer,
});
