import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from '../screens/DetailsScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

const Stack = createNativeStackNavigator();

const FavoriteStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#e5e2d4dd',
        animation: 'fade_from_bottom',
      }}>
      <Stack.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{title: 'Favorites'}}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{title: 'Movie Information'}}
      />
    </Stack.Navigator>
  );
};

export default FavoriteStack;
