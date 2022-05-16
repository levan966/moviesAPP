import {StyleSheet, View, Image, FlatList} from 'react-native';
import React from 'react';
import {baseImageUrl} from '../api/links';
import CustomText from './CustomText';

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
              <View style={styles.imageView}>
                {item.profile_path == null ? (
                  <Image
                    style={styles.image}
                    source={{
                      uri: 'https://ru.top50vpn.com/assets/person-default.jpg',
                    }}
                  />
                ) : (
                  <Image
                    style={styles.image}
                    source={{uri: baseImageUrl + item.profile_path}}
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
  imageView: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 180,
  },
  name: {
    paddingVertical: 10,
  },
});
