import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './homeStack';
import HomeScreen from '../screens/HomeScreen';
import MoviesScreen from '../screens/MoviesScreen';
import MoviesStack from './moviesStakc';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingHorizontal: 5,
          paddingTop: 5,
          backgroundColor: 'rgba(34,36,40,1)',
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen name="HomeTab" component={HomeNavigator} />
      <Tab.Screen name="search" component={HomeNavigator} />
      <Tab.Screen name="movies" component={MoviesStack} />
      <Tab.Screen name="favorites" component={HomeNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
