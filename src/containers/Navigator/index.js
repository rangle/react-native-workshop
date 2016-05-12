import { Map } from 'immutable';
import { NavigationExperimental, View, StatusBar } from 'react-native';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Pokedex from '../Pokedex';
import PokemonDetails from '../PokemonDetails';
import { ROUTE_IDS } from '../../constants';
import * as helpers from './navigator-helpers';

const  {
  AnimatedView: NavigationAnimatedView,
  Card: NavigationCard,
  Header: NavigationHeader,
} = NavigationExperimental;

/**
 * Navigator Container
 */
class Navigator extends Component {

  componentWillMount() {
    this.props.catchEmAll();
  }

  _getActiveScene = (navigationState) => {
    switch (navigationState.key) {
      case ROUTE_IDS.POKEMON_DETAIL:
        return <PokemonDetails url={ navigationState.url } />;
      default:
        return <Pokedex />;
    }
  }

  _renderCard = (props) => (
    <NavigationCard
      { ...props }
      key={ props.scene.navigationState.key }
      renderScene={ this._renderScene }
    />
  )

  _renderScene = ({ scene: { navigationState } }) => {
    const activeScene = this._getActiveScene(navigationState);

    return (
    <View style={{ flex: 1, marginTop: NavigationHeader.HEIGHT }}>
      <StatusBar barStyle="default"/>
      { activeScene }
    </View>
    );
  }

  render() {
    const { navigationState, onNavigate } = this.props;

    return (
      <NavigationAnimatedView
        navigationState={ navigationState }
        style={{ flex: 1 }}
        onNavigate={ onNavigate }
        renderOverlay={ helpers.renderHeader }
        applyAnimation={ helpers.applyAnimation }
        renderScene={ this._renderCard }
      />
    );
  }
}

Navigator.propTypes = {
  navigationState: PropTypes.object,
  gotoPokedex: PropTypes.func,
  onNavigate: PropTypes.func,
  catchEmAll: PropTypes.func,
  iChooseYou: PropTypes.func,
  clearChoice: PropTypes.func,
  activePokemon: PropTypes.instanceOf(Map),
};

export default connect(
  helpers.mapStateToProps,
  helpers.mapDispatchToProps,
)(Navigator);
