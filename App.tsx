import React from 'react';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';

import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './navigaiton/tabNavigaiton';
import favorites from './store/reducers/favorites';

const rootReducer = combineReducers({
  favoriteMovies: favorites,
});
const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
