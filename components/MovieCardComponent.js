import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomText from './CustomText';

const MovieCardComponent = ({
  style,
  title,
  onPress,
  basePosterApi = 'https://image.tmdb.org/t/p/w500/',
  poster_path,
  grade = null,
  cardWidth = 140,
  cardHeight = 210,
  borderRadius = 5,
  marginLeft = 20,
  marginTop = 10,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <View style={{width: cardWidth, marginLeft: marginLeft}}>
        <Image
          style={[styles.image, {height: cardHeight, borderRadius, marginTop}]}
          source={{uri: basePosterApi + poster_path}}
        />
        <View style={styles.info}>
          {grade ? (
            <View style={styles.rating}>
              <Text style={styles.star}>⭐</Text>
              <Text style={styles.grade}>{grade}</Text>
            </View>
          ) : null}
          <CustomText
            style={styles.title}
            // adjustsFontSizeToFit
            numberOfLines={2}>
            {title}
          </CustomText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCardComponent;

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
    color: '#ffffffe8',
    fontSize: 16,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  star: {
    color: '#ffffff94',
    fontSize: 10,
  },
  grade: {
    color: '#ffffff90',
    fontSize: 15,
    marginLeft: 10,
  },
  info: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});
