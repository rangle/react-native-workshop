import { Map } from 'immutable';
import {
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import React, { PropTypes, Component } from 'react';
import * as actions from '../actions';
import clrs from '../utils/clrs';


class PokemonDetails extends Component {
  componentWillMount() {
    this.props.iChooseYou(this.props.url);
  }

  componentWillUnmount() {
    this.props.unChoose();
  }

  render() {
    return (
      <ScrollView style={ styles.container }>
        <Text>Pokemon Details</Text>
      </ScrollView>
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
});
