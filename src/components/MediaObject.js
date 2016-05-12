import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { PropTypes } from 'react';
import clrs from '../utils/clrs';

const placeholder = require('../assets/who.jpg');

const MediaObject = ({ index, action, text, imageUrl }) => {
  const image = (
    imageUrl ? { uri: imageUrl } : placeholder
  );

  return (
    <TouchableOpacity
      underlayColor={ clrs.gray }
      onPress={ action }>

      <View style={[ styles.mediaObject, bgColor(Number(index) + 1) ]}>
        <Image source={ image } style={ styles.image } />
        <Text style={ styles.text }>
          { text.charAt(0).toUpperCase() + text.slice(1) }
        </Text>
      </View>

    </TouchableOpacity>
  );
};

export default MediaObject;

const styles = StyleSheet.create({
  mediaObject: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
  },
  text: { flex: 1 },
  image: {
    width: 48,
    height: 48,
    marginRight: 16,
    marginLeft: 16,
  },
});

MediaObject.propTypes = {
  index: PropTypes.string,
  text: PropTypes.string,
  imageUrl: PropTypes.string,
  action: PropTypes.func,
};

function bgColor(idx) {
  return {
    backgroundColor: idx % 2 !== 0 ? clrs.white : clrs.lighterGray,
  };
}
