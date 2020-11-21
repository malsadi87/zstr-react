import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/Ionicons'


import {AuthContext} from '../../components/context'


// tab screens
import MainScreen from './MainScreen'
import MyMealsScreen from './MyMealsScreen'
import OrdersScreen from './OrdersScreen'

// meals related screens
import NewMealScreen from './NewMealScreen'

const MainStack = createStackNavigator()
const MealStack = createStackNavigator()
const OrderStack= createStackNavigator()

const Tab = createMaterialBottomTabNavigator()

const MealStackScreen = ({ navigation }) => {
    return (
        <MealStack.Navigator screenOptions={
            {
                headerStyle: {
                    backgroundColor: "#fff"
                },
                headerTintColor: "#000"
            }
        }>
            <MealStack.Screen
                name="Meals"
                component={MyMealsScreen} options={{
                    headerRight: () => (
                        <Icon.Button
                            name="md-add-circle-outline"
                            size={25}
                            backgroundColor="#fff"
                            color="#000"
                            onPress={() => { navigation.navigate('AddMeal') }} />
                    )
                }} />
            <MealStack.Screen name="AddMeal" component={NewMealScreen} options={{
                title: 'New Meal'
            }} />

        </MealStack.Navigator>
    )
}

const OrderStackScreen = ({ navigation }) => {
    return (
        <OrderStack.Navigator screenOptions={
            {
                headerStyle: {
                    backgroundColor: "#fff"
                },
                headerTintColor: "#000"
            }
        }>
            <OrderStack.Screen
                name="Orders"
                component={OrdersScreen} />
            

        </OrderStack.Navigator>
    )
}

const MainStackScreen = ({ navigation }) => {
    const {signOut} = useContext(AuthContext)
    return (
        <MainStack.Navigator screenOptions={
            {
                headerStyle: {
                    backgroundColor: "#fff"
                },
                headerTintColor: "#000"
            }
        }>
            <MainStack.Screen
                name="Main"
                component={MainScreen} options={{
                    headerRight: () => (
                        <MaterialCommunityIcons.Button
                            name="logout"
                            size={25}
                            backgroundColor="#fff"
                            color="#000"
                            onPress={() => { signOut() }} />
                    )
                }} />
            

        </MainStack.Navigator>
    )
}

const HomeTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
    >
        <Tab.Screen
            name="Home"
            component={MainStackScreen}
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
            component={MealStackScreen}
            options={{
                tabBarLabel: 'Meals',
                tabBarColor: "#1f65ff",
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="food" color={color} size={27} />
                ),
            }}
        />
        <Tab.Screen
            name="Orders"
            component={OrderStackScreen}
            options={{
                tabBarLabel: 'Orders',
                tabBarColor: "#694fad",
                tabBarIcon: ({ color }) => (
                    <Feather name="shopping-cart" color={color} size={27} />
                ),
            }}
        />

    </Tab.Navigator>

)

export default HomeTabScreen

const styles = StyleSheet.create({})
