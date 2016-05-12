import {
  StyleSheet,
  Text,
} from 'react-native';
import React, { PropTypes } from 'react';
import clrs from '../utils/clrs';

const Header = ({ style, children }) => {
  return (
    <Text style={[ styles.header, style ]}>
      { children }
    </Text>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    fontWeight: '600',
    fontSize: 12,
    paddingVertical: 4,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: clrs.lightGray,
    color: clrs.white,
    borderColor: clrs.lightGray,
  },
});

Header.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};
