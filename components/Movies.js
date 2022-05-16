import React from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MovieCardComponent from './MovieCardComponent';

const Movies = ({data, setPage}) => {
  const navigation = useNavigation();
  return (
    <FlatList
      columnWrapperStyle={{justifyContent: 'space-evenly'}}
      keyExtractor={item => item.id.toString()}
      data={data}
      numColumns={3}
      onEndReached={() => {
        setPage(page => page + 1);
      }}
      renderItem={({item}) => {
        return (
          <MovieCardComponent
            id={item.id}
            title={item.original_title}
            poster_path={item.poster_path}
            onPress={() => {
              navigation.navigate('Details', item);
            }}
            cardWidth={110}
            cardHeight={165}
            fontSize={16}
            borderRadius={0}
            marginLeft={0}
          />
        );
      }}
    />
  );
};

export default Movies;
