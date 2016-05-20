import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Immutable, { List } from 'immutable';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import clrs from '../utils/clrs';
import * as actions from '../actions';


class Pokedex extends Component {
  render() {
    return (
      <View>
        <Text>Pokedex</Text>
      </View>
    );
  }
}

Pokedex.propTypes = {
};

const styles = StyleSheet.create({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pokedex);

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}
