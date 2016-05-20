import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { PropTypes } from 'react';
import clrs from '../utils/clrs';

const Header = ({ style, children }) => {
  return (
    <View style={ styles.container }>
      <Text style={[ styles.text, style ]}>
        { children }
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    backgroundColor: clrs.lightGray,
  },
  text: {
    fontWeight: '600',
    fontSize: 12,
    color: clrs.white,
    borderColor: clrs.lightGray,
  },
});

Header.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};
