import React, { useState, useEffect } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Card from '../components/Card'
import { data } from '../model/data'

import Swiper from 'react-native-swiper'

const assets = require('../assets.js')

import { MEALS_END_POINT } from '../model/end-points'


const HomeScreen = ({ navigation }) => {
    const [meals, setMeals] = useState([])
    useEffect(() => {

        fetch(MEALS_END_POINT)
            .then((response) => response.json())
            .then((responseData) => {
                console.log("response data : " + JSON.stringify(responseData.rows))
                setMeals(responseData.rows)
            }).done()

    }, [])

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.sliderContainer}>
                    <Swiper height={200} autoplay={true} horizontal={false} activeDotColor="#009387">
                        <View style={styles.slide}>
                            <ImageBackground
                                source={require('../images/slider1.jpg')}
                                resizeMode="cover"
                                style={styles.sliderImage}>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}></Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.slide}>
                            <Image
                                source={require('../images/slider2.jpg')}
                                resizeMode="cover"
                                style={styles.sliderImage} />
                        </View>
                        <View style={styles.slide}>
                            <Image
                                source={require('../images/slider5.jpg')}
                                resizeMode="cover"
                                style={styles.sliderImage} />
                        </View>
                        <View style={styles.slide}>
                            <Image
                                source={require('../images/slider4.jpg')}
                                resizeMode="cover"
                                style={styles.sliderImage} />
                        </View>
                        <View style={styles.slide}>
                            <Image
                                source={require('../images/slider3.jpg')}
                                resizeMode="cover"
                                style={styles.sliderImage} />
                        </View>
                    </Swiper>
                </View>
                <View style={styles.categoryContainer}>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => {
                        navigation.navigate('CardListScreen', {
                            title: "Results"
                        })
                    }}>
                        <View style={styles.categoryIcon}>
                            <Ionicons name="ios-restaurant" size={30} color="#009387" />
                        </View>
                        <Text style={styles.categoryBtnTxt}> Rest1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                        <View style={styles.categoryIcon}>
                            <MaterialCommunityIcons name="food" size={30} color="#009387" />
                        </View>
                        <Text style={styles.categoryBtnTxt}> Rest1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                        <View style={styles.categoryIcon}>
                            <MaterialCommunityIcons name="food-fork-drink" size={30} color="#009387" />
                        </View>
                        <Text style={styles.categoryBtnTxt}> Rest1</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                        <View style={styles.categoryIcon}>
                            <Ionicons name="ios-restaurant" size={30} color="#009387" />
                        </View>
                        <Text style={styles.categoryBtnTxt}> Rest1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                        <View style={styles.categoryIcon}>
                            <MaterialCommunityIcons name="food" size={30} color="#009387" />
                        </View>
                        <Text style={styles.categoryBtnTxt}> Rest1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                        <View style={styles.categoryIcon}>
                            <MaterialCommunityIcons name="food-fork-drink" size={30} color="#009387" />
                        </View>
                        <Text style={styles.categoryBtnTxt}> Rest1</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.cardsWrapper}>
                    <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 16, color: "#333" }}>Most Popular</Text>
                    {meals.map((meal, index) => {
                        //console.log('Meal : ' + index)
                        return (
                            <Card 
                                key={index}
                                itemData={meal}
                                onPress={() => { navigation.navigate('CardItemDetails', { itemData: meal }) }}
                            />
                        )
                    })}
                </View>
            </View>
        </ScrollView>
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sliderContainer: {
        height: 200,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },

    wrapper: {},

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    },
    categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 10,
    },
    categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center',
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        backgroundColor: '#fff' /* '#FF6347' */,
        borderRadius: 50,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#009387',
    },
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 100,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontWeight: 'bold',
    },
    cardDetails: {
        fontSize: 12,
        color: '#444',
    },
})