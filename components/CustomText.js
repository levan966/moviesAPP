import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CustomText = ({children, style, ...otherProps}) => {
  return (
    <View>
      <Text {...otherProps} style={[styles.headerTitle, style]}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 16,
    color: '#ffffffd5',
  },
});

export default CustomText;
