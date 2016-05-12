import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { PropTypes } from 'react';
import clrs from '../utils/clrs';
import { capitalize } from '../utils';

const TypedItem = ({ style, type, value }) => {
  return (
    <View style={[ styles.container, style ]}>
      <Text style={ styles.value }>
        { capitalize(value)  }
      </Text>
      <Text style={ styles.type }>
        { capitalize(type) }
      </Text>
    </View>
  );
};

export default TypedItem;

const styles = StyleSheet.create({
  container: {
    height: 72,
    paddingLeft: 16,
    borderBottomWidth: 1,
    borderColor: clrs.lightGray,
    justifyContent: 'center',
  },
  type: {
    color: clrs.gray,
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: clrs.black,
  },
});

TypedItem.propTypes = {
  type: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
