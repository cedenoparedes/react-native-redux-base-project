import React, {useContext} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import GlobalContext from '../context';

const SuperHeroesList = props => {
  const [globalContext] = useContext(GlobalContext);
  const getSuperHeroes = () => {
    const {superheroes} = props;
    console.log(globalContext);
    const superHeroeData = superheroes.map((heroes, key) => {
      return <Text key={key}>{heroes.superhero}</Text>;
    });
    return superHeroeData;
  };
  return getSuperHeroes();
};

const mapStateToProps = state => {
  return {superheroes: state.superHeroes};
};

export default connect(mapStateToProps)(SuperHeroesList);
