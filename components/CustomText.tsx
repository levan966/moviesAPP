import React, {ReactNode} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  View,
  ViewStyle,
} from 'react-native';

interface Props extends TextProps {}

const CustomText = ({children, style, ...otherProps}: Props) => {
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
