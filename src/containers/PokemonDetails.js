import { Map } from 'immutable';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import React, { PropTypes, Component } from 'react';
import * as actions from '../actions';
import clrs from '../utils/clrs';
import Loader from '../components/Loader';
import BasicInfo from '../components/BasicInfo';
import Sprites from '../components/Sprites';
import Header from '../components/Header';
import Moves from '../components/Moves';
import Stats from '../components/Stats';


class PokemonDetails extends Component {
  componentWillMount() {
    this.props.iChooseYou(this.props.url);
  }

  componentWillUnmount() {
    this.props.unChoose();
  }

  render() {
    const { pokemon } = this.props;
    const basicInfo = {
      types: pokemon.get('types'),
      height: pokemon.get('height'),
      weight: pokemon.get('weight'),
    };

    return (
      <Loader show={ !pokemon.get('name') }>
        <ScrollView style={ styles.container }>
          <Sprites sprites={ pokemon.get('sprites') } />
          <BasicInfo { ...basicInfo } />
          <Header>STATS</Header>
          <Stats stats={ pokemon.get('stats') } />
          <Header>MOVES</Header>
          <Moves moves={ pokemon.get('moves') } />
        </ScrollView>
      </Loader>
    );
  }
}

PokemonDetails.propTypes = {
  url: PropTypes.string,
  pokemon: PropTypes.instanceOf(Map),
  iChooseYou: PropTypes.func,
  unChoose: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetails);

function mapStateToProps(state) {
  return {
    pokemon: state.pokemon.get('active'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    iChooseYou: url => dispatch(actions.iChooseYou(url)),
    unChoose: () => dispatch(actions.unChoose()),
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: clrs.white,
  },
});
