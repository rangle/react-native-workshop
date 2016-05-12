import {
  Animated,
  NavigationExperimental,
  Easing,
} from 'react-native';
import clrs from '../../utils/clrs';
import React, { PropTypes } from 'react';
import * as actions from '../../actions';

const { Header: NavigationHeader } = NavigationExperimental;

export function mapStateToProps(state) {
  return {
    navigationState: state.navigator,
    pokemon: state.pokemon.get('all'),
    activePokemon: state.pokemon.get('active'),
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    goToPokemonDetail: (artist) => {
      dispatch(actions.goToPokemonDetail(artist));
    },
    gotoPokedex: () => dispatch(actions.gotoPokedex()),
    onNavigate: payload => dispatch(actions.onNavigate(payload)),
    catchEmAll: () => dispatch(actions.catchEmAll()),
    iChooseYou: url => dispatch(actions.iChooseYou(url)),
    clearChoice: () => dispatch(actions.clearChoice()),
  };
}

export function applyAnimation(pos, navState) {
  Animated.timing(pos, {
    toValue: navState.index,
    duration: 500,
    easing: Easing.bezier(0.36, 0.66, 0.04, 1),
  }).start();
}

export function renderHeader(props) {
  return (
    <NavigationHeader
      style={{ backgroundColor: clrs.aqua }}
      { ...props }
      renderTitleComponent={ renderTitle }
    />
  );
}

export function renderTitle({ scene }) {
  return (
    <NavigationHeader.Title
      textStyle={{ color: clrs.blue, fontWeight: '700', letterSpacing: 1 }}>
      { scene.navigationState.title.toUpperCase() }
    </NavigationHeader.Title>
  );
}

renderTitle.propTypes = {
  scene: PropTypes.object,
};
