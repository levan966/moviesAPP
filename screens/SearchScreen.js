import {StyleSheet, View, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import Screen from '../components/Screen';
import {useDebounce} from 'use-debounce';
import Debaounce from '../hooks/useDebounce';
import axios from 'axios';

const SearchScreen = () => {
  const [text, setText] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = Debaounce(text, 500);

  const searchMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie/?api_key=aa130e4e4d10a76fa0af5bf9b913dd35&query="${debouncedSearchTerm}"`,
      )
      .then(response => {
        setResults(response);
        console.log('res', response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(debouncedSearchTerm);
    if (debouncedSearchTerm) {
      setIsSearching(true);
      searchMovie();
    } else {
      setResults([]);
      setIsSearching(false);
    }
  }, [debouncedSearchTerm]);

  return (
    <Screen>
      <View style={styles.container}>
        <TextInput
          placeholder="Search"
          style={styles.input}
          onChangeText={text => setText(text)}
        />
      </View>
    </Screen>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    paddingHorizontal: 30,
  },
  input: {
    padding: 10,
    borderRadius: 5,
    height: 40,
    borderWidth: 1,
    borderColor: '#f5f5f5',
    backgroundColor: '#f5f5f5',
  },
});
