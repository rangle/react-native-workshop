import { List } from 'immutable';
import React, { PropTypes } from 'react';
import TypedItem from '../components/TypedItem';
import { capitalize } from '../utils';


const Types = ({ types }) => {
  const typeString = (
    types ? types.reduce((res, type, idx) => {
      const base = `${ res }${ capitalize(type.getIn(['type', 'name'])) }`;

      if (types.count() - 2 === idx) {
        return  base + ' & ';
      } else if (types.count() - 1 === idx) {
        return base;
      }

      return base + ', ';
    }, '') : ''
  );

  return (
    <TypedItem
      style={{ flex: 2 }}
      type={ 'Type' }
      value={ typeString } />
  );
};

export default Types;

Types.propTypes = {
  types: PropTypes.instanceOf(List),
};
