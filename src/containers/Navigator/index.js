import { Map } from 'immutable';
import { NavigationExperimental, View, StatusBar, Text } from 'react-native';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Pokedex from '../Pokedex';
import PokemonDetails from '../PokemonDetails';
import * as helpers from './navigator-helpers';


/**
 * Navigator Container
 */
class Navigator extends Component {
  render() {
    return (
      <View>
        <Text style={{ padding: 64 }}>Navigator Component</Text>
      </View>
    );
  }
}

Navigator.propTypes = {
};

export default connect(
  // helpers.mapStateToProps,
  // helpers.mapDispatchToProps,
)(Navigator);
