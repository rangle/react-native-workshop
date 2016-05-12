import { List } from 'immutable';
import {
  StyleSheet,
  View,
} from 'react-native';
import React, { PropTypes } from 'react';
import ListItem from '../components/ListItem';
import { cleanAndcapitalize } from '../utils';
import clrs from '../utils/clrs';


const Moves = ({ style, moves }) => {
  return (
    <View style={[ styles.list, style ]}>
      {
        moves.map((move, idx) => (
          <ListItem key={ idx }>
            { cleanAndcapitalize(move.getIn(['move', 'name'])) }
          </ListItem>
        ))
      }
    </View>
  );
};

export default Moves;

const styles = StyleSheet.create({
  list: {
    marginBottom: 16,
    borderTopWidth: 1,
    borderTopColor: clrs.lightGray,
  },
});

Moves.propTypes = {
  moves: PropTypes.instanceOf(List),
  style: PropTypes.object,
};
