import React, {useState} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    StatusBar,
    Platform,
    ScrollView,
    TouchableOpacity,
    Alert
} from 'react-native'

import { Title, Caption } from 'react-native-paper'

import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons'

import AsyncStorage from '@react-native-async-storage/async-storage'

import {ORDERS_END_POINT, MASTER_KEY_TOKEN} from '../model/end-points'


const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;



const CardItemDetailsScreen = ({ route }) => {
    
    const itemData = route.params.itemData
    //const [meal, setMeal] = useState(itemData)

    const completeOrder = async () => {

        let userId = null
        let userToken = null
          try {
            userId = await AsyncStorage.getItem('userId')
            userToken = await AsyncStorage.getItem('userToken')
          } catch (e) {
            // saving error
            console.log(e)
          }
          console.log("User id : " + userId)
    
        const newOrder = {
            sender: userId,
            item: itemData.id,
            notes: "none",
            amount:"1",
            price:itemData.price,
            status:"submitted",
            access_token:userToken
           
        }
        console.log("New Meal " + JSON.stringify(newOrder))

        fetch(ORDERS_END_POINT, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json', 
                Authorization: 'Bearer ' + MASTER_KEY_TOKEN
            },
            body: JSON.stringify(newOrder)
        })
            .then(response => {
                if(response.status == 201)
                     return response.json()
            })
            .then(data => {
                console.log(data)
                Alert.alert(
                    'Order',
                    'Your Order has been successfully submitted.',
                    [
                      //{text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                      {text: 'Ok', onPress: () => {console.log("Ok Pressed")}},
                    ],
                    { cancelable: false }
                  )
            })
            .catch(error => console.log(' error : ' + error.message))
}

    return (
        <View style={{ backgroundColor: "#FFF" }}>

            <ScrollView>
                <Image
                    source={require('../images/5.png')}
                    style={styles.foodIcon}
                />
                <View style={styles.qunatityContainer}>
                    <TouchableOpacity onPress={() => { }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 18
                        }}>+</Text>
                    </TouchableOpacity>

                    <Text style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        paddingHorizontal: 20
                    }}>
                        3
                   </Text>

                    <TouchableOpacity
                        onPress={this.subtractQuantity}
                    >
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 18
                        }}>-</Text>
                    </TouchableOpacity>
                </View>

                {/*<View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 20,
                    marginTop: 30
                }}>
                </View>*/}

                <View style={styles.infoBoxWrapper}>
                    <View style={[styles.infoBox, {
                        borderRightColor: "#dddddd",
                        borderRightWidth: 1
                    }]}>
                        <Title>{itemData.type}</Title>
                        <Caption>Type</Caption>
                    </View>
                    <View style={[styles.infoBox, {
                        borderRightColor: "#dddddd",
                        borderRightWidth: 1
                    }]}>
                        <Title>{itemData.cuisine}</Title>
                        <Caption>Cuisine</Caption>

                    </View>
                    <View style={styles.infoBox}>
                        <Title>{itemData.price}</Title>
                        <Caption>Price</Caption>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>
                    Details
                </Text>
                <Text style={styles.details}>
                    {itemData.description}
                </Text>

                <Text style={styles.sectionTitle}>
                    Ingredients
                </Text>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 20, marginHorizontal: 20 }}
                >
                    <View style={styles.ingredients}>
                        <Image
                            source={require('../images/11.png')}
                            style={styles.ingredientsIcon}
                        />
                    </View>

                    <View style={styles.ingredients}>
                        <Image
                            source={require('../images/13.png')}
                            style={styles.ingredientsIcon}
                        />
                    </View>

                    <View style={styles.ingredients}>
                        <Image
                            source={require('../images/12.png')}
                            style={styles.ingredientsIcon}
                        />
                    </View>

                    <View style={styles.ingredients}>
                        <Image
                            source={require('../images/8.png')}
                            style={styles.ingredientsIcon}
                        />
                    </View>

                    <View style={styles.ingredients}>
                        <Image
                            source={require('../images/bl.png')}
                            style={styles.ingredientsIcon}
                        />
                    </View>

                    <View style={styles.ingredients}>
                        <Image
                            source={require('../images/7.png')}
                            style={styles.ingredientsIcon}
                        />
                    </View>
                </ScrollView>



                <View style={[styles.section, { height: 250 }]}>
                    <MapView
                        style={{ flex: 1 }}
                        region={{
                            latitude: 51.5074,
                            longitude: 0.1278,
                            latitudeDelta: 0.00864195044303443,
                            longitudeDelta: 0.000142817690068,
                        }}>
                        {/*<MapView.Marker
                        coordinate={itemData.coordinate}
                    >
                        <Image
                            source={require('../images/marker1.png')}
                            style={{ width: 40, height: 40}}
                            resizeMode="contain"
                        />
                    </MapView.Marker>*/}
                    </MapView>
                </View>


            </ScrollView>

            <TouchableOpacity onPress={() => { completeOrder() }}>
                <View style={styles.shopping}>
                    <Icon
                        name="add-circle-outline"
                        size={24}
                        color="#FFF"
                    />
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default CardItemDetailsScreen

const styles = StyleSheet.create({
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 40,
        marginHorizontal: 20
    },
    headerRowTitle: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center"
    },
    foodIcon: {
        height: 100,
        width: 100,
        alignSelf: "center"
    },
    qunatityContainer: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "#f6f3fb",
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20
    },
    sectionTitle: {
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 30,
        marginHorizontal: 20
    },
    price: {
        fontWeight: "bold",
        fontSize: 28,
        marginLeft: 80
    },
    descrpition: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#a4a4a9"
    },
    name: {
        fontWeight: "bold",
        fontSize: 25
    },
    ingredients: {
        borderRadius: 15,
        borderWidth: 0.1,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginRight: 10
    },
    ingredientsIcon: {
        height: 30,
        width: 30
    },
    details: {
        color: "#a4a4a9",
        fontWeight: "bold",
        fontSize: 15,
        marginTop: 10,
        marginHorizontal: 20,
        textAlign: "justify"
    },
    shopping: {
        position: "absolute",
        backgroundColor: "#000",
        height: 50,
        width: 50,
        bottom: 20,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 25
    },
    infoBoxWrapper: {
        marginTop: 10,
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
        borderRadius: 25

    },
    infoBox: {
        width: '33.3%',
        alignItems: 'center',
        justifyContent: 'center',
    },
})