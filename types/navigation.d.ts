import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MovieType} from './API';

export type RootStackParamList = {
  HomeScreen: undefined;
  Details: MovieType;
};

export type RootStackParamListMovies = {
  HomeScreen: undefined;
  Details: {
    Movie?: MovieType;
    id?: number;
  };
};

export type RootBottomTabParamlist = {
  HomeNavigator: undefined;
  SearchStack: undefined;
  MoviesStack: undefined;
  FavoriteStack: undefined;
};

//////ამათ არსად არ ვიყენებ
export type RootHomeNavigationGenericProp<
  T extends keyof RootBottomTabParamlist & string,
> = NativeStackNavigationProp<RootBottomTabParamlist, T>;
export type RootRouteHomeNavigationGenericProp<
  T extends keyof RootBottomTabParamlist & string,
> = RouteProp<RootBottomTabParamlist, T>;
