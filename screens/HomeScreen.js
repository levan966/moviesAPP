import {StyleSheet, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CategoryList from '../components/CategoryList';
import Screen from '../components/Screen';
import MyLoader from '../components/Loader';

const HomeScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [popular, setPopular] = useState();
  const [topRated, setTopRated] = useState();
  const [upComing, setUpComing] = useState();

  const getUpcoming = () => {
    setIsLoading(true);
    axios
      .get(
        'https://api.themoviedb.org/3/movie/upcoming?api_key=aa130e4e4d10a76fa0af5bf9b913dd35',
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

  const DATA = [
    {
      title: 'Upcoming',
      data: upComing,
    },
    {
      title: 'Top Rated',
      data: topRated,
    },
    {
      title: 'Popular',
      data: popular,
    },
  ];

  return (
    <Screen>
      {isLoading ? (
        <MyLoader />
      ) : (
        <ScrollView>
          <View style={styles.screen}>
            <CategoryList title={DATA[0].title} data={DATA[0].data} />
            <CategoryList title={DATA[1].title} data={DATA[1].data} />
            <CategoryList title={DATA[2].title} data={DATA[2].data} />
          </View>
        </ScrollView>
      )}
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
