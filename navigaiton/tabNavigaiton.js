import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './homeStack';
import MoviesStack from './moviesStakc';
import SearchStack from './SearchStack';
import FavoriteStack from './favoritesStack';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#ca9f32',
        tabBarInactiveTintColor: '#e4dfd4',
        tabBarLabelStyle: {
          marginTop: 0,
          fontSize: 13,
        },
        tabBarStyle: {
          paddingHorizontal: 10,
          paddingTop: 5,
          backgroundColor: 'rgba(34,36,40,1)',
          borderTopWidth: null,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icons name="magnify" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Movies"
        component={MoviesStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icons name="movie" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="FavoriteStack"
        component={FavoriteStack}
        options={{
          title: 'Favorites',
          tabBarIcon: ({color, size}) => (
            <Icons name="cards-heart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
