import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import axios from 'axios';
import {baseImageUrl} from '../api/links';
import {api_key} from '../api/apikey';
import FavoriteButton from '../components/FavoriteButton';
import Screen from '../components/Screen';
import List from '../components/DifList';
import CustomText from '../components/CustomText';

const DetailsScreen = ({route}) => {
  let {id} = route.params;
  const baseurl = 'https://api.themoviedb.org/3/movie/';

  const [details, setDetails] = useState();
  const [actors, setActors] = useState([]);
  const runTime =
    Math.trunc(details?.runtime / 60) +
    'h' +
    '\xa0' +
    '\xa0' +
    (details?.runtime % 60) +
    'm';

  let date = new Date(details?.release_date).getFullYear();

  const getCast = useCallback(() => {
    axios.get(`${baseurl}${id}/credits${api_key}`).then(response => {
      setActors(response.data.cast);
    });
  }, [id]);

  const getDetails = useCallback(() => {
    axios.get(`${baseurl}+${id}+${api_key}`).then(response => {
      setDetails(response.data);
    });
  }, [id]);

  useEffect(() => {
    getDetails();
    getCast();
  }, [getCast, getDetails]);

  return (
    <Screen>
      <ScrollView>
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
                  uri: baseImageUrl + details?.poster_path,
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
          </View>
        </View>
        <FavoriteButton
          id={id}
          title={details?.title}
          poster={details?.poster_path}
        />
        <List data={actors} title="Cast" />
      </ScrollView>
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
