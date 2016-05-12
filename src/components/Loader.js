import {
  Animated,
  Easing,
  StyleSheet,
  View,
} from 'react-native';
import React, { Component, PropTypes } from 'react';
import clrs from '../utils/clrs';
const placeholder = require('../assets/who.jpg');


class Loader extends Component {
  componentWillMount() {
    this._animatedValue = new Animated.Value(0.25);
    this.pulse();
  }

  render() {
    const content = this.props.show ? (
      <View style={ styles.container }>
        <Animated.Image source={ placeholder }
          style={[ styles.img, { opacity: this._animatedValue } ]} />
      </View>
    ) : (
      this.props.children
    );

    return <View style={{ flex: 1 }}>{ content }</View>;
  }

  pulse() {
    Animated.sequence([
      Animated.timing(this._animatedValue, {
        toValue: 1,
        duration: 300,
        easing: Easing.ease,
      }),
      Animated.timing(this._animatedValue, {
        toValue: 0.25,
        duration: 300,
        easing: Easing.ease,
      }),
    ])
    .start(() => {
      if (this.props.show) {
        this.pulse();
      }
    });
  }
}

Loader.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node,
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: clrs.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 64,
    height: 64,
  },
});
