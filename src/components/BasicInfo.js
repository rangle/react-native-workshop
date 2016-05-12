import { List } from 'immutable';
import {
  View,
} from 'react-native';
import React, { PropTypes } from 'react';
import TypedItem from './TypedItem';
import Types from '../components/Types';


const BasicInfo = ({ types, height, weight }) => {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      <Types types={ types } />
      <TypedItem
        style={{ flex: 1, borderLeftWidth: 1 }}
        type={ 'Height' }
        value={ height } />
      <TypedItem
        style={{ flex: 1, borderLeftWidth: 1 }}
        type={ 'Weight' }
        value={ weight } />
    </View>
  );
};

export default BasicInfo;

BasicInfo.propTypes = {
  types: PropTypes.instanceOf(List),
  height: PropTypes.number,
  weight: PropTypes.number,
};
