import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import * as FavoritesActions from '../store/actions/favorites';
import {baseImageUrl} from '../api/links';
import CustomText from './CustomText';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Separator from './Separator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamListMovies} from '../types/navigation';

type Props = {
  id: number;
  title: string;
  poster: string;
};

const FavoriteCard = ({id, title, poster}: Props) => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamListMovies>>();
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', {id})}
          style={styles.movie}>
          <View>
            {poster ? (
              <Image
                source={{uri: baseImageUrl + poster}}
                style={styles.image}
              />
            ) : (
              <Image
                source={{
                  uri: 'https://thumbs.dreamstime.com/b/movie-clapper-film-reels-white-vintage-empty-background-vertical-frame-55129545.jpg',
                }}
                style={styles.image}
              />
            )}
          </View>
          <View style={styles.title}>
            <CustomText style={styles.text}>{title}</CustomText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            dispatch(FavoritesActions.removeFromFavorites(id));
          }}
          style={styles.remove}>
          <Icons name="delete-forever" size={44} color="#ffffffe6" />
        </TouchableOpacity>
      </View>
      <Separator style={styles.separator} />
    </>
  );
};

export default FavoriteCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
  },
  movie: {
    flexDirection: 'row',
    flex: 1,
  },
  image: {
    width: 90,
    height: 130,
  },
  title: {
    flex: 1,
    backgroundColor: '#d0c4b227',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
  remove: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aa4825d8',
  },
  separator: {
    marginBottom: 2,
  },
});
