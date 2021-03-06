import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#e5e2d4dd',
        animation: 'fade_from_bottom',
        headerTransparent: true,
      }}>
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{title: 'Search'}}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{title: 'Movie Information'}}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
