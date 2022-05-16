import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import axios from 'axios';
import CategoryList from '../components/CategoryList';
import MyLoader from '../components/Loader';
import Screen from '../components/Screen';

const HomeScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [popular, setPopular] = useState();
  const [topRated, setTopRated] = useState();
  const [upComing, setUpComing] = useState();

  const getUpcoming = () => {
    setIsLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=aa130e4e4d10a76fa0af5bf9b913dd35`,
      )
      .then(response => {
        setUpComing(response.data.results);
        setIsLoading(false);
      });
  };
  const getPopular = () => {
    setIsLoading(true);

    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=aa130e4e4d10a76fa0af5bf9b913dd35',
      )
      .then(response => {
        setPopular(response.data.results);
        setIsLoading(false);
      });
  };
  const getTopRated = () => {
    setIsLoading(true);

    axios
      .get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=aa130e4e4d10a76fa0af5bf9b913dd35',
      )
      .then(response => {
        setTopRated(response.data.results);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getUpcoming();
    getPopular();
    getTopRated();
  }, []);

  return (
    <Screen>
      {isLoading ? (
        <MyLoader />
      ) : (
        <ScrollView>
          <View>
            <CategoryList title="Upcoming" data={upComing} />
            <CategoryList title="Top Rated" data={topRated} />
            <CategoryList title="Popular" data={popular} />
          </View>
        </ScrollView>
      )}
    </Screen>
  );
};

export default HomeScreen;
