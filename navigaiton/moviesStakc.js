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
        // headerShown: false,
        animation: 'fade_from_bottom',
        headerStyle: {
          backgroundColor: '#555d7762',
        },
      }}>
      <Stack.Screen name="Movies" component={MoviesScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default MoviesStack;
