import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import MovieList from '../screans/MovieList';
import Configuration from '../screans/Configuration';
import MovieDetails from '../screans/MovieDetails';
import Search from '../screans/Search';

import { white, darkBlue } from '../utils/colors';

import { ROUTES, TABS } from './routes';

const screenOptions = {
  headerStyle: {
    //backgroundColor: white
  },
  //headerTintColor: darkBlue,
  headerTitleStyle: {
    //fontWeight: 'bold'
  }
};

const HomeStack = createStackNavigator();
export const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{ ...screenOptions }}>
    <HomeStack.Screen
      name={ROUTES.MOVIE_LIST}
      component={MovieList}
      options={{
        title: TABS.HOME
      }}
    />
    <HomeStack.Screen
      name={ROUTES.MOVIE_DETAILS}
      component={MovieDetails}
      options={({ route }) => {
        const { title } = route.params || {};

        return {
          title
        };
      }}
    />
  </HomeStack.Navigator>
);

const SearchStack = createStackNavigator();
export const SearchStackScreen = () => (
  <SearchStack.Navigator screenOptions={{ ...screenOptions }}>
    <SearchStack.Screen
      name={ROUTES.SEARCH}
      component={Search}
      options={{ title: TABS.SEARCH }}
    />
    <SearchStack.Screen
      name={ROUTES.SEARCH_RESULTS}
      component={MovieList}
      options={{ title: 'Search results' }}
    />
    <SearchStack.Screen
      name={ROUTES.MOVIE_DETAILS}
      component={MovieDetails}
      options={({ route }) => {
        const { title } = route.params || {};

        return {
          title
        };
      }}
    />
  </SearchStack.Navigator>
);

const ConfigurationStack = createStackNavigator();
export const ConfigurationStackScreen = () => (
  <ConfigurationStack.Navigator screenOptions={{ ...screenOptions }}>
    <ConfigurationStack.Screen
      name={ROUTES.CONFIGURATION}
      component={Configuration}
      options={{ title: TABS.CONFIGURATION }}
    />
  </ConfigurationStack.Navigator>
);
