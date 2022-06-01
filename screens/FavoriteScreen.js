import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Screen from '../components/Screen';
import FavoriteCard from '../components/FavoriteCard';
import NumberOfResults from '../components/NumberOfResults';

const FavoriteScreen = () => {
  const allFavorites = useSelector(state => state.favoriteMovies);
  const numOfResults = allFavorites.favorites.length;
  return (
    <Screen>
      <FlatList
        ListHeaderComponent={<NumberOfResults {...{numOfResults}} />}
        showsVerticalScrollIndicator={false}
        data={allFavorites.favorites}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => {
          return (
            <>
              <FavoriteCard
                id={item.id}
                title={item.title}
                poster={item.poster}
              />
            </>
          );
        }}
      />
    </Screen>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    marginVertical: 10,
    fontSize: 30,
    fontWeight: '700',
    color: '#dab222',
  },
});
