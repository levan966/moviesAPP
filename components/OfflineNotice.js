import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import CustomText from './CustomText';
//
const OfflineNotice = () => {
  const netIfno = useNetInfo();
  console.log(netIfno);
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
    width: '100%',
    height: 60,
    backgroundColor: '#c3b92aff',
  },
  text: {
    color: '#6c0707ff',
    fontSize: 20,
    fontWeight: '700',
  },
});
