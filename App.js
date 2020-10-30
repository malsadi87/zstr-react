/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'

import HomeScreen from './src/screens/HomeScreen'
import DetailsScreen from './src/screens/DetailsScreen'

//const Stack = createStackNavigator()

// to merge stack navigator with Drawer navigator
const HomeStack = createStackNavigator()
const DetailsStack = createStackNavigator()

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator screenOptions={
      {
        headerStyle: {
          backgroundColor: "#009387"
        },
        headerTintColor: "#FFF",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    }>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title: "Overview"
      }} />
    </HomeStack.Navigator>
  )
}

const DetailsStackScreen = ({ navigation }) => {
  return (
    <DetailsStack.Navigator screenOptions={
      {
        headerStyle: {
          backgroundColor: "#009387"
        },
        headerTintColor: "#FFF",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    }>
      <HomeStack.Screen name="Details" component={DetailsScreen} />

    </DetailsStack.Navigator>
  )
}

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
      </Drawer.Navigator>
      {/*<Stack.Navigator screenOptions={
        {
          headerStyle:{
            backgroundColor:"#009387"
          },
          headerTintColor:"#FFF",
          headerTitleStyle:{
            fontWeight:"bold"
          }
        }
      }>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title:"Overview"
        }}/>
        <Stack.Screen name="Details" component={DetailsScreen} />

      </Stack.Navigator>*/}
    </NavigationContainer>
  )
}

export default App
