import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';

const SuperHeroesList = props => {
  const getSuperHeroes = () => {
    const {superheroes} = props;
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
