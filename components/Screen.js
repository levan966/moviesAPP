import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
} from 'react-native';

const Screen = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 0,
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#0e1c1fff',
  },
});
