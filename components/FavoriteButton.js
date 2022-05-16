import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import * as FavoritesActions from '../store/actions/favorites';
import Icons from 'react-native-vector-icons/Octicons';
import CustomText from './CustomText';

const FavoriteButton = ({id, title, poster}) => {
  const dispatch = useDispatch();
  const allFavorites = useSelector(state => state.favoriteMovies);
  const [favorite, setFavorite] = useState(false);
  const allId = allFavorites.favorites.map(e => e.id);

  useEffect(() => {
    setFavorite(allId.includes(id));
  }, [allId, id]);

  return (
    <>
      {favorite ? (
        <TouchableOpacity
          onPress={() => {
            dispatch(FavoritesActions.removeFromFavorites(id));
          }}
          style={[styles.container, styles.added]}>
          <Icons name="check" size={24} color="white" />
          <CustomText style={styles.addButoon}>Added to Favorites</CustomText>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            dispatch(FavoritesActions.addToFavorites({id, title, poster}));
          }}
          style={styles.container}>
          <Icons name="plus" size={24} />
          <CustomText style={[styles.addButoon, {color: '#000000'}]}>
            Add to Favorites
          </CustomText>
        </TouchableOpacity>
      )}
    </>
  );
};

export default FavoriteButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d6ab1eff',
    marginVertical: 20,
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d3ba1a',
  },
  addButoon: {
    fontWeight: '400',
    marginLeft: 12,
  },
  added: {
    backgroundColor: '#af7b7b00',
  },
});
