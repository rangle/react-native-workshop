import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { PropTypes } from 'react';
import clrs from '../utils/clrs';

const ListItem = ({ style, children }) => {
  return (
    <View style={[ styles.container, style ]}>
      <Text style={ styles.item }>
        { children }
      </Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    height: 40,
    paddingLeft: 16,
    justifyContent: 'center',
  },
  item: {
    color: clrs.black,
  },
});

ListItem.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};
