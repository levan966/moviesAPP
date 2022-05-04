import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import axios from 'axios';
import CustomText from '../components/CustomText';
import Screen from '../components/Screen';

const DetailsScreen = ({route}) => {
  let {id} = route.params;
  const [details, setDetails] = useState();
  const [video, setVideo] = useState();

  const runTime =
    Math.trunc(details?.runtime / 60) +
    'h' +
    '\xa0' +
    '\xa0' +
    (details?.runtime % 60) +
    'm';
  let date = new Date(details?.release_date).getFullYear();

  const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
  const baseurl = 'https://api.themoviedb.org/3/movie/';
  const apiKey = '?api_key=aa130e4e4d10a76fa0af5bf9b913dd35';

  const getDetails = () => {
    axios.get(`${baseurl}+${id}+${apiKey}`).then(response => {
      setDetails(response.data);
    });
  };

  useEffect(() => {
    getDetails();
  }, []);

  // useEffect(() => {
  //   axios.get(`${baseurl}+${id}+/videos+${apiKey}`).then(response => {
  //     setDetails(response.data);
  //   });
  // }, []);

  return (
    <Screen>
      <View style={{padding: 10}}>
        <CustomText style={{fontSize: 30, paddingRight: 20}}>
          {details?.title}
        </CustomText>
        <View style={{flexDirection: 'row'}}>
          <CustomText style={[styles.date]}>{date}</CustomText>
          <CustomText style={[styles.date, {marginLeft: 20}]}>
            {runTime}
          </CustomText>
        </View>
      </View>
      <Image
        source={{
          uri: baseImageUrl + details?.backdrop_path,
        }}
        style={styles.cover}
      />
      <View style={styles.details}>
        <View style={styles.poster}>
          {details?.poster_path ? (
            <Image
              source={{
                uri: baseImageUrl + details.poster_path,
              }}
              style={{width: '100%', height: 180}}
            />
          ) : null}
        </View>
        <View style={styles.description}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{flexGrow: 0.7}}>
            {details?.genres &&
              details.genres.map(e => (
                <CustomText style={styles.genres}>{e.name}</CustomText>
              ))}
          </ScrollView>
          <CustomText numberOfLines={6}>{details?.overview}</CustomText>
          <CustomText numberOfLines={6}>{details?.id}</CustomText>
        </View>
      </View>
    </Screen>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  date: {
    paddingTop: 5,
    color: '#ffffff8c',
  },
  cover: {
    width: '100%',
    height: 200,
  },
  poster: {
    width: 120,
    borderWidth: 2,
    borderColor: '#ffffff90',
  },
  details: {
    flexDirection: 'row',
    padding: 10,
    width: '70%',
  },
  genres: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: '#e9dfdf93',
    marginRight: 15,
  },
  description: {
    justifyContent: 'flex-start',
    marginLeft: 16,
  },
});
