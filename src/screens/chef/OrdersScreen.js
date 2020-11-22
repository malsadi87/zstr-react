import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {ORDERS_END_POINT, MASTER_KEY_TOKEN, MEALS_END_POINT} from '../../model/end-points'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Order from '../../components/Order'

const OrdersScreen = () => {

    const [orders, setOrders] = useState([])

    useEffect( () => {

        const getOrders = async () => {
        console.log("get orders")

        let userId = null
        let userToken = null
          try {
            userId = await AsyncStorage.getItem('userId')
            userToken = await AsyncStorage.getItem('userToken')
          } catch (e) {
            // saving error
            console.log(e)
          }

        fetch(ORDERS_END_POINT, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json', 
                Authorization: 'Bearer ' + userToken
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                const response = responseData.rows;
                const filtered = response.filter(row => row.item.chef.id == userId)
                setOrders(filtered)
            }).done()
        }

        
        getOrders()

        
    }, [])


    return (
        <View style={styles.container}>
            <Text>Chef : Recent Recieved Orders</Text>
            {orders.map((order, index) => {
                        //console.log('Meal : ' + index)
                        return (
                            <Order 
                                key={index}
                                order={order}
                                onPress={() => { }}
                            />
                        )
                    })}
        </View>
    )
}

export default OrdersScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'90%',
        alignSelf:"center"
       
    }
})
