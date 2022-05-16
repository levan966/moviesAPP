import React from 'react';
import {StyleSheet, View} from 'react-native';

const Separator = ({style}) => {
  return <View style={[styles.separator, style]} />;
};

export default Separator;

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#cfbcbc85',
    marginVertical: 10,
  },
});
