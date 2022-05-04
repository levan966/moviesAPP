import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './homeStack';
import MoviesStack from './moviesStakc';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchScreen from '../screens/SearchScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

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
        tabBarIcon: () => {
          // if (route.name === 'Home') {
          //   return focused ? (
          //     <Icons name="home" size={28} color="#ca9f32" />
          //   ) : (
          //     <Icons name="home" size={28} color="#e4dfd4" />
          //   );
          // } else if (route.name === 'Search') {
          //   return focused ? (
          //     <Icons name="magnify" size={28} color="#ca9f32" />
          //   ) : (
          //     <Icons name="magnify" size={28} color="#e4dfd4" />
          //   );
          // } else if (route.name === 'Movies') {
          //   return focused ? (
          //     <Icons name="movie" size={28} color="#ca9f32" />
          //   ) : (
          //     <Icons name="movie" size={28} color="#e4dfd4" />
          //   );
          // } else if (route.name === 'Favorites') {
          //   return focused ? (
          //     <Icons name="cards-heart" size={28} color="#ca9f32" />
          //   ) : (
          //     <Icons name="cards-heart" size={28} color="#e4dfd4" />
          //   );
          // }
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
        component={SearchScreen}
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
        name="Favorites"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icons name="cards-heart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
