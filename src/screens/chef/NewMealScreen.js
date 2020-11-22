import React, {useState} from 'react'
import {
    StyleSheet, Text, View,
    Platform, TouchableOpacity,
    TextInput, ScrollView, Image,
    Alert
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import AsyncStorage from '@react-native-async-storage/async-storage'

import {MEALS_END_POINT, MASTER_KEY_TOKEN} from '../../model/end-points'




const NewMealScreen = () => {

    const [meal, setMeal] = useState({
        name:'',
        description:'',
        type:'',
        price:'',
        ingredients:'',
        cuisine:'',
        chef:''
    });

    const handleMealNameChange = (val) => {
        setMeal({
            ...meal,
            name: val
        })
    }
    
    const handleMealDescriptionChange = (val) => {
        setMeal({
            ...meal,
            description: val
        })
    }
    
    const handleMealTypeChange = (val) => {
        setMeal({
            ...meal,
            type: val
        })
    }
    
    const handleMealPriceChange = (val) => {
        setMeal({
            ...meal,
            price: val
        })
    }
    
    const handleMealIngredientsChange = (val) => {
        setMeal({
            ...meal,
            ingredients: val
        })
    }
    
    const handleMealCuisineChange = (val) => {
        setMeal({
            ...meal,
            cuisine: val
        })
    }
    
    const submitMeal = async (val) => {
    
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
    
        const newMeal = {
            name: meal.name,
            description: meal.description,
            type: meal.type,
            ingredients: meal.ingredients,
            price: meal.price,
            cuisine: meal.cuisine,
            chef: userId,
            access_token: userToken
        }
        console.log("New Meal " + JSON.stringify(newMeal))

        fetch(MEALS_END_POINT, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json', 
                Authorization: 'Bearer ' + MASTER_KEY_TOKEN
            },
            body: JSON.stringify(newMeal)
        })
            .then(response => {
                if(response.status == 201)
                     return response.json()
            })
            .then(data => {
                console.log(data)
                Alert.alert(
                    'Meal',
                    'Your meal has been successfully added.',
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
        <View style={styles.container}>
            <View style={{alignContent:"center", padding:25}}>
                <View style={{alignContent:"center", alignItems:"center"}}>
                <MaterialIcons name="food-bank" color="#05375a" size={100} />
                </View>
                <View style={styles.action}>
                    <Icon name="food-fork-drink" color="#05375a" size={20} />
                    <TextInput
                        placeholder="Meal Name"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        onChangeText={(val) => handleMealNameChange(val)}
                        style={[
                            styles.textInput,
                            {
                                color:"#05375a",
                            },
                        ]}
                    />
                </View>
                <View style={styles.action}>
                    <MaterialIcons name="description" color="#05375a" size={20} />
                    <TextInput
                        placeholder="Meal Description"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        onChangeText={(val) => handleMealDescriptionChange(val)}
                        numberOfLines={3}
                        style={[
                            styles.textInput,
                            {
                                color:"#05375a",
                            },
                        ]}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="list-ol" color="#05375a" size={20} />
                    <TextInput
                        placeholder="Meal Ingredients"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        onChangeText={(val) => handleMealIngredientsChange(val)}
                        numberOfLines={3}
                        style={[
                            styles.textInput,
                            {
                                color:"#05375a",
                            },
                        ]}
                    />
                </View>
                <View style={styles.action}>
                    <MaterialIcons name="category" color="#05375a" size={20} />
                    <TextInput
                        placeholder="Type"
                        placeholderTextColor="#666666"
                        onChangeText={(val) => handleMealTypeChange(val)}
                        autoCorrect={false}
                        style={[
                            styles.textInput,
                            {
                                color:"#05375a",
                            },
                        ]}
                    />
                </View>
                <View style={styles.action}>
                    <Icon name="globe-model" color="#05375a" size={20} />
                    <TextInput
                        placeholder="Cuisine"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        onChangeText={(val) => handleMealCuisineChange(val)}
                        style={[
                            styles.textInput,
                            {
                                color:"#05375a",
                            },
                        ]}
                    />
                </View>
                <View style={styles.action}>
                    <Icon name="currency-usd-circle-outline" color="#05375a" size={20} />
                    <TextInput
                        placeholder="Price"
                        placeholderTextColor="#666666"
                        keyboardType="number-pad"
                        onChangeText={(val) => handleMealPriceChange(val)}
                        autoCorrect={false}
                        style={[
                            styles.textInput,
                            {
                                color:"#05375a",
                            },
                        ]}
                    />
                </View>
              
                </View>
                <TouchableOpacity style={styles.appButtonContainer} onPress={() => { submitMeal()}}>
                    <Text style={styles.appButtonText}>Add</Text>
                </TouchableOpacity>
        </View>
    )
}

export default NewMealScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#009387',
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#009387',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    profileImageContainer: {
        height: 100,
        width: 100,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraIcon: {
        opacity: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    appButtonContainer: {
        marginTop:10,
        backgroundColor: "#009387",
        borderRadius: 30,
        paddingVertical: 14,
        paddingHorizontal: 14,
        width:"70%",
        alignSelf:"center"
      },
      appButtonText: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        alignItems:"center"
      }
})