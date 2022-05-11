import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import CustomText from './CustomText';
import Separator from './Separator';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {baseImageUrl} from '../api/links';
import {useNavigation} from '@react-navigation/native';

const SearchResult = ({item}) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', item);
        }}
        style={styles.container}>
        {item.poster_path ? (
          <Image
            style={styles.image}
            source={{
              uri: `${baseImageUrl}${item.poster_path}`,
            }}
          />
        ) : (
          <Image
            style={styles.image}
            source={{
              uri: `https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`,
            }}
          />
        )}
        <View style={styles.detailsContainer}>
          <CustomText>{item.original_title}</CustomText>
          <CustomText style={styles.detail}>
            {new Date(item.release_date).getFullYear()}
          </CustomText>
          {item.vote_average !== 0 ? (
            <CustomText style={styles.detail}>
              {item.vote_average}
              <Icons name="star" size={16} color="#e0b4238c" />
            </CustomText>
          ) : null}
        </View>
      </TouchableOpacity>
      <Separator />
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 120,
  },
  detailsContainer: {
    marginLeft: 10,
  },
  detail: {
    color: '#ffffff93',
    paddingTop: 8,
  },
});
