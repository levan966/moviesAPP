import React, {ReactNode} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  ViewStyle,
} from 'react-native';
import OfflineNotice from './OfflineNotice';

type Props = {
  children: ReactNode;
  style?: ViewStyle;
};

const Screen = ({children, style}: Props) => {
  return (
    <>
      <SafeAreaView style={[styles.screen, style]}>
        <OfflineNotice />
        <StatusBar barStyle="light-content" />
        <View style={[styles.view, style]}>{children}</View>
      </SafeAreaView>
    </>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#0e1c1fff',
  },
  view: {
    flex: 1,
  },
});
