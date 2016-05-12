import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import React, { PropTypes } from 'react';
import clrs from '../utils/clrs';

const SearchBar = ({ onChange, query }) => {
  return (
    <View style={ styles.container }>
      <TextInput style={ styles.input }
        value={ query }
        onChangeText={ text => onChange(text) } />
    </View>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func,
  query: PropTypes.string,
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: clrs.lighterGray,
    borderTopColor: clrs.lightGray,
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  input: {
    alignItems: 'center',
    backgroundColor: clrs.white,
    borderColor: '#E4E4E4',
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    height: 36,
    margin: 16,
    fontWeight: '800',
    paddingLeft: 10,
  },
});

SearchBar.propTypes = {};
