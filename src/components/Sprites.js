import {
  Image,
  StyleSheet,
  View,
} from 'react-native';
import React, { PropTypes } from 'react';
import clrs from '../utils/clrs';

const Sprites = ({ sprites }) => {
  const images = sprites.toList()
    .filter(sprite => sprite)
    .map((sprite, key) => (
      <Image key={ key }
        source={{ uri: sprite }}
        style={ styles.image } />
    ));
  return (
    <View style={ styles.container }>
      { images }
    </View>
  );
};

export default Sprites;

Sprites.propTypes = {
  sprites: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: clrs.lightGray,
    paddingTop: 64,
    paddingBottom: 64,
  },
  image: {
    width: 48,
    height: 48,
    margin: 16,
  },
});
