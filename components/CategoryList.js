import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import MovieCard from './MovieCardComponent';
import {useNavigation} from '@react-navigation/native';

const CategoryList = ({title, data}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>{title}</CustomText>
      <View style={styles.category}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          data={data}
          renderItem={({item}) => {
            return (
              <MovieCard
                id={item.id}
                title={item.original_title}
                poster_path={item.poster_path}
                grade={item.vote_average}
                marginTop={0}
                onPress={() => {
                  navigation.navigate('Details', item);
                }}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
  },
  title: {
    marginLeft: 20,
    fontSize: 26,
    fontWeight: '500',
    color: '#ca9f32',
  },
  category: {
    marginTop: 16,
  },
});
