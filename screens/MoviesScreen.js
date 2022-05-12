import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import axios from 'axios';
import CustomText from '../components/CustomText';
import Screen from '../components/Screen';
import Movies from '../components/Movies';

const MoviesScreen = ({navigation}) => {
  // const [result, setResult] = useState([]);
  const [category, setCategory] = useState('movies');
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);
  const [page, setPage] = useState(1);

  const getMovies = useCallback(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=aa130e4e4d10a76fa0af5bf9b913dd35&page=${page}`,
      )
      .then(response => {
        setPage(response.data.page);
        setMovies(results => [...results, ...response.data.results]);
      });
  }, [page]);

  const getTVSeries = () => {
    axios
      .get(
        'https://api.themoviedb.org/3/tv/popular?api_key=aa130e4e4d10a76fa0af5bf9b913dd35',
      )
      .then(response => {
        setPage(response.data.page);
        setTv(results => [...results, ...response.data.results]);
      });
  };

  useEffect(() => {
    if (category === 'movies') {
      getMovies();
    } else {
      getTVSeries();
    }
  }, [page, category, getMovies]);

  return (
    <Screen>
      <View style={styles.categoryContainer}>
        <TouchableOpacity onPress={() => setCategory('movies')}>
          <CustomText style={styles.category}>Movies</CustomText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory('tv')}>
          <CustomText style={styles.category}>TV Series</CustomText>
        </TouchableOpacity>
      </View>
      <Movies data={category === 'movies' ? movies : tv} {...{setPage}} />
    </Screen>
  );
};

export default MoviesScreen;

const styles = StyleSheet.create({
  movies: {
    backgroundColor: '#0e1c1fff',
  },

  categoryContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  category: {
    fontSize: 24,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: '#e9dfdf93',
  },
});
