import React from 'react';
import {StyleSheet, View} from 'react-native';
import Separator from './Separator';
import CustomText from './CustomText';

const NumberOfResults = ({numOfResults}) => {
  return (
    <View style={styles.container}>
      <Separator style={styles.separator} />
      {numOfResults ? (
        <CustomText style={styles.text}>{numOfResults} Results</CustomText>
      ) : (
        <CustomText style={styles.text}>No Favorites yet</CustomText>
      )}
      <Separator style={styles.separator} />
    </View>
  );
};

export default NumberOfResults;

const styles = StyleSheet.create({
  separator: {
    height: 0.6,
  },
  text: {
    marginLeft: 20,
    color: '#ffffff',
  },
});
