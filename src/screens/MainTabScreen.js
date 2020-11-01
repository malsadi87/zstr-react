import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/Ionicons'


import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import ProfileScreen from './ProfileScreen'
import ExploreScreen from './ExploreScreen'
import EditProfileScreen from './EditProfileScreen'
import CardListScreen from './CardListScreen'
import CardItemDetailsScreen from './CardItemDetailsScreen'

//const Stack = createStackNavigator()

// to merge stack navigator with Drawer navigator
const HomeStack = createStackNavigator()
const DetailsStack = createStackNavigator()

const ProfileStack = createStackNavigator()


const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator screenOptions={
      {
        headerStyle: {
          backgroundColor: "#fff",
          shadowColor:"#fff", // ISO
          elevation : 0 // Android
        },
        headerTintColor: "#333",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    }>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title: "Zester",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            style={{marginLeft:10}}
            backgroundColor="#fff"
            color="#333"
            onPress={() => { navigation.openDrawer() }} />
        ),
        headerRight: () => (
          <Icon.Button
            name="ios-search"
            size={25}
            backgroundColor="#fff"
            color="#333"
            onPress={() => { navigation.openDrawer() }} />
        )
      }} />
      <HomeStack.Screen name="CardListScreen" component={CardListScreen} 
      options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false
      })} />
      <HomeStack.Screen name="CardItemDetails" component={CardItemDetailsScreen} 
      options={({route}) => ({
          //title: route.params.title,
          headerBackTitleVisible: false
      })} />
    </HomeStack.Navigator>
  )
}

const DetailsStackScreen = ({ navigation }) => {
  return (
    <DetailsStack.Navigator screenOptions={
      {
        headerStyle: {
          backgroundColor: "#1f65ff"
        },
        headerTintColor: "#FFF",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    }>
      <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1f65ff"
            onPress={() => { navigation.openDrawer() }} />
        )
      }} />
    </DetailsStack.Navigator>
  )
}

const ProfileStackScreen = ({ navigation }) => {
  return (
    <ProfileStack.Navigator screenOptions={
      {
        headerStyle: {
          backgroundColor: "#fff"
        },
        headerTintColor: "#000"
      }
    }>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen} options={{
          headerRight: () => (
            <MaterialCommunityIcons.Button
              name="account-edit"
              size={25}
              backgroundColor="#fff"
              color="#000"
              onPress={() => { navigation.navigate('EditProfile') }} />
          )
        }} />
      <ProfileStack.Screen name="EditProfile" component={EditProfileScreen} options={{
        title:'Edit Profile'
      }} />
    </ProfileStack.Navigator>
  )
}

const Tab = createMaterialBottomTabNavigator()


const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: "#009387",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={27} />
        ),
      }}
    />
    <Tab.Screen
      name="Details"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Details',
        tabBarColor: "#1f65ff",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="access-point" color={color} size={27} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: "#694fad",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={27} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor: "#b02860",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={27} />
        ),
      }}
    />
  </Tab.Navigator>

)

export default MainTabScreen