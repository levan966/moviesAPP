import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import CustomText from './CustomText';
//
const OfflineNotice = () => {
  const netIfno = useNetInfo();
  if (netIfno.type !== 'unknown' && !netIfno.isInternetReachable) {
    return (
      <View style={styles.container}>
        <CustomText style={styles.text}>No Internet Connection</CustomText>
      </View>
    );
  }
  return null;
};

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#000000',
  },
  text: {
    color: '#000000',
  },
});
