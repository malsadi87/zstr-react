import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {MEALS_END_POINT} from '../../model/end-points'
import AsyncStorage from '@react-native-async-storage/async-storage'

const MyMealsScreen = () => {

    const [meals, setMeals] = useState([])
    useEffect( () => {

        const getMyMeals = async () => {

            let userId = null
          try {
            userId = await AsyncStorage.getItem('userId')
          } catch (e) {
            // saving error
            console.log(e)
          }

        fetch(MEALS_END_POINT)
            .then((response) => response.json())
            .then((responseData) => {
                const filtered_results = responseData.rows.filter(row => row.chef.id == userId)
                console.log("filtered result " + JSON.stringify(filtered_results))
                setMeals(filtered_results)
            }).done()
        }

        getMyMeals()

        
    }, [])
    return (
        <View>
            <Text>chefs : My Meals</Text>
        </View>
    )
}

export default MyMealsScreen

const styles = StyleSheet.create({})
