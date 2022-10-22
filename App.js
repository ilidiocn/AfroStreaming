import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Host } from 'react-native-portalize';


import {
  HomeStackScreen,
  SearchStackScreen,
  ConfigurationStackScreen
} from './navigation/screens';
import { ROUTES, TABS } from './navigation/routes';

import { darkBlue, white, pink, blue } from './utils/colors';

enableScreens();

const defaultNavigationOptions = {
  headerTintColor: darkBlue,
  headerStyle: {
    backgroundColor: white
  }
};

const Tab = createBottomTabNavigator();
const TabsConfig = {

  screenOptions: {
    "tabBarActiveTintColor": "#f95f62",
    "tabBarInactiveTintColor": "#8190a5",
    "tabBarLabelStyle": {
      "margin": 0,
      "padding": 1
    },
    "tabBarStyle": [
      {
        "display": "flex"
      },
      null
    ]
  }
};




export default function App(){
  return(
        <NavigationContainer>
            <Host>
              <Tab.Navigator initialRouteName={ROUTES.MOVIE_LIST} {...TabsConfig}>
                <Tab.Screen
                  name={TABS.HOME}
                  component={HomeStackScreen}
                  options={{
                    ...defaultNavigationOptions,
                    tabBarIcon: ({ color }) => (
                      <Feather name="home" size={20} color={color} />
                    ),
                    headerShown: false,
                    title:""
                  }}
                />
                <Tab.Screen
                  name={TABS.SEARCH}
                  component={SearchStackScreen}
                  options={{
                    ...defaultNavigationOptions,
                    tabBarIcon: ({ color }) => (
                      <Feather name="search" size={20} color={color} />
                    ),
                    headerShown: false,
                    title:""
                  }}
                />
                <Tab.Screen
                  name={TABS.CONFIGURATION}
                  component={ConfigurationStackScreen}
                  options={{
                    ...defaultNavigationOptions,
                    tabBarIcon: ({ color }) => (
                      <Feather name="menu" size={20} color={color} />
                    ),
                    headerShown: false,
                    title:""
                  }}
                />
          </Tab.Navigator>
        </Host>
    </NavigationContainer>
  );
}


