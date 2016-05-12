import { List } from 'immutable';
import {
  StyleSheet,
  View,
} from 'react-native';
import React, { PropTypes } from 'react';
import TypedItem from '../components/TypedItem';
import clrs from '../utils/clrs';


const Stats = ({ style, stats }) => {
  return (
    <View style={[ styles.list, style ]}>
      {
        stats.toList().map((stat, idx) => (
          <TypedItem key={ idx }
            type={ stat.getIn(['stat', 'name']) }
            value={ stat.get('base_stat') } />
        ))
      }
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  list: {
    borderTopWidth: 1,
    borderTopColor: clrs.lightGray,
  },
});

Stats.propTypes = {
  stats: PropTypes.instanceOf(List),
  style: PropTypes.object,
};
