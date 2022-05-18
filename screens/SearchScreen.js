import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, View, TextInput, FlatList} from 'react-native';
import axios from 'axios';
import Debaounce from '../hooks/useDebounce';
import Screen from '../components/Screen';
import SearchResult from '../components/SearchResult';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchScreen = () => {
  const [text, setText] = useState('');
  const [results, setResults] = useState([]);
  const debouncedSearchTerm = Debaounce(text, 500);

  const searchMovie = useCallback(async () => {
    console.log('111');
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi/?api_key=aa130e4e4d10a76fa0af5bf9b913dd35&query=${debouncedSearchTerm}`,
      )
      .then(response => {
        console.log('Yeeeeeees');
        setResults(response);
        console.log('2222');
      })
      .catch(error => {
        console.log('noooooooo', error);
      });
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchMovie();
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm, searchMovie]);

  return (
    <Screen>
      <View style={styles.inputContainer}>
        <View style={styles.searchInput}>
          <Icons
            style={styles.magnify}
            name="magnify"
            color="#0000007c"
            size={28}
          />
          <TextInput
            clearButtonMode="always"
            placeholder="Search"
            style={styles.input}
            onChangeText={value => setText(value)}
          />
        </View>
      </View>
      <FlatList
        style={styles.listResult}
        data={results.data?.results}
        renderItem={({item}) => <SearchResult item={item} />}
      />
    </Screen>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
    backgroundColor: '#322e2ec6',
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    height: 40,
    backgroundColor: '#f5f5f5',
  },
  magnify: {
    zIndex: 1,
    position: 'absolute',
    left: 5,
  },
  listResult: {
    marginVertical: 10,
  },
});
