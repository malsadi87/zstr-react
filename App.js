/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState, useEffect, useContext, useMemo } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import RootStackScreen from './src/screens/RootStackScreen'
import AsyncStorage from '@react-native-async-storage/async-storage'


import MainTabScreen from './src/screens/MainTabScreen'
import BookmarkScreen from './src/screens/BookmarkScreen'
import SettingsScreen from './src/screens/SettingsScreen'
import SupportScreen from './src/screens/SupportScreen'
import DrawerContent from './src/components/DrawerContent'

import { createDrawerNavigator } from '@react-navigation/drawer'

import { AuthContext } from './src/components/context'
import Users  from './src/model/users'
 
const Drawer = createDrawerNavigator()


const App = () => {

  //const [isLoading, setIsLoading] = useState(true)
  //const [userToken, setUserToken] = useState(null)


  const initialLoginState = {
    isLoading: true,
    userToken: null,
    userId: null
  }

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        }
      case 'LOGIN':
        return {
          ...prevState,
          userId : action.id,
          userToken: action.token,
          isLoading: false
        }
      case 'LOGOUT':
        return {
          ...prevState,
          userToken: null,
          userId : null,
          isLoading: false
        }
      case 'REGISTER':
        return {
          ...prevState,
          userId : token.id,
          userToken: action.token,
          isLoading: false
        }
    }
  }

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)
  
  const authContext = useMemo(() => ({
    signIn: async (foundUser) => {
      //setUserToken('aaaa')
      //setIsLoading(false)
      console.log(' Sign in : ' + JSON.stringify(foundUser))
      //const userToken = String(foundUser[0].userToken)
      //const username = String(foundUser[0].username)
          try {
            await AsyncStorage.setItem('userToken', foundUser.userToken)
            await AsyncStorage.setItem('userId', foundUser.id)
          } catch (e) {
            // saving error
            console.log(e)
          }
      
      dispatch({type:'LOGIN', id : foundUser.id, token : foundUser.userToken})
    },
    signUp: () => {
      console.log('Signup method')
      //setUserToken('aaaa')
      //setIsLoading(false)
    },
    signOut: async () => {
      //setUserToken(null)
      //setIsLoading(false)
      try {
        await AsyncStorage.removeItem('userToken')
      } catch (e) {
        // saving error
        console.log(e)
      }
      dispatch({type:'LOGOUT'})

    }
  }), [])
  useEffect(() => {
    setTimeout(async () => {
      //setIsLoading(false)
      let userToken = null
      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (e) {
        // saving error
        console.log(e)
      }
      dispatch({type:'RETRIEVE_TOKEN', token : userToken})

    }, 1000)
  }, [])

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator
          size="large"
        />
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="Bookmark" component={BookmarkScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
            <Drawer.Screen name="Support" component={SupportScreen} />
          </Drawer.Navigator>
        ) : <RootStackScreen />}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

export default App
