import {StyleSheet, View, Image, FlatList} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import {baseImageUrl} from '../api/links';

const DifList = ({data, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <CustomText style={styles.text}>{title}</CustomText>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <View style={styles.details}>
              <View style={styles.image}>
                {item.profile_path == null ? (
                  <Image
                    source={{
                      uri: 'https://ru.top50vpn.com/assets/person-default.jpg',
                    }}
                    style={{width: '100%', height: 180}}
                  />
                ) : (
                  <Image
                    source={{uri: baseImageUrl + item.profile_path}}
                    style={{width: '100%', height: 180}}
                  />
                )}
              </View>
              <CustomText numberOfLines={1} style={styles.name}>
                {item.name}
              </CustomText>
            </View>
          );
        }}
      />
    </View>
  );
};

export default DifList;

const styles = StyleSheet.create({
  text: {
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 30,
    color: '#ca9f32',
  },
  details: {
    width: 120,
    marginLeft: 20,
    marginBottom: 20,
  },
  image: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  name: {
    paddingVertical: 10,
  },
});
