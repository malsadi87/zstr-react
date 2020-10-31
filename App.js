/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import MainTabScreen from './src/screens/MainTabScreen'

import DrawerContent from './src/components/DrawerContent'

import BookmarkScreen from './src/screens/BookmarkScreen'
import SettingsScreen from './src/screens/SettingsScreen'
import SupportScreen from './src/screens/SupportScreen'

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="Bookmark" component={BookmarkScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Support" component={SupportScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App
