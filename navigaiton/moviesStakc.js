import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from '../screens/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import MoviesScreen from '../screens/MoviesScreen';

const Stack = createNativeStackNavigator();

const MoviesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#e5e2d4dd',
        animation: 'fade_from_bottom',
        headerTransparent: true,
      }}>
      <Stack.Screen
        name="Movie"
        component={MoviesScreen}
        options={{title: 'All Movies'}}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{title: 'Movie Information'}}
      />
    </Stack.Navigator>
  );
};

export default MoviesStack;
