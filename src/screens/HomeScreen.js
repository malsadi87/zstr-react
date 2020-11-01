import React from 'react'
import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import Category from '../components/Category'
import Product from '../components/Product'

import Icon from 'react-native-vector-icons/Ionicons'

const assets = require('../assets.js')

const HomeScreen = ({ navigation }) => {
    return (

        <ScrollView style={styles.scroll}>
        <View style={styles.main}> 
           <View style={{width:"10%"}}>
               
           </View>
           <View style={styles.location}>
           <TextInput
             style={styles.inputStyle}
             onChangeText={city => {}}
             underlineColorAndroid="#F6F6F7"
             placeholder="enter a city"
             placeholderTextColor="gray"
             keyboardType="default"
            blurOnSubmit={false}
           />
           </View>
           <View style={{width:"10%"}}>
               <Icon name="search" size={30} />
           </View>
        </View>
        
        <View style={styles.title}>
           <Text style={styles.titleText}>Food that</Text>
           <Text>Meets your need</Text>
        </View>
        
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          style={{marginTop:40}}>

          <Category
             imageURL={'burger'} 
             title = "Burgers"
             color="#f9dd7e" />    

          <Category
             imageURL={'sandwitch'} 
             title = "Burrito"
             color="#e4e5eb" />  

          <Category
             imageURL={'pizza'} 
             title = "Pizza"
             color="#e4e5eb" /> 

          <Category
             imageURL={'salad'} 
             title = "Salad"
             color="#e4e5eb" />    
        </ScrollView>

    <View style={styles.section}>
      <View style={{width:"50%"}}>
         <Text style={styles.sectionTitle}>New Products</Text>
      </View>
      <View style={{width:"50%", alignItems:"flex-end"}}>
         <Icon
            name="search"
            size={25}
            color="#848385"
        />
      </View>
    </View>

    <View style={styles.foodCanvas}>
         <Product
            image={require("../images/4.png")}
            title="Burgers"
            name="Smokehouse"
            price="12.99"
            details="Cheesy Beef Burger"
            onPress={() => navigation.navigate('Details',{
                itemId: 86,
                otherParam: 'B',
              })}
         />
          <Product
            image={require("../images/6.png")}
            title="Pizza2"
            name="Adios Pizza"
            details="Rich Pizza"
            price="11.99"
            onPress={() => this.props.navigation.navigate('Detail',{
                itemId: 87,
                otherParam: 'P',
              })}

               />
    </View>
    </ScrollView>   
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: "#FFF"
    },
    main: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 40,
        marginHorizontal: 20
    },
    location: {
        width: "80%",
        alignItems: "center"
    },
    inputStyle: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1.5,
        borderRadius: 30,
        borderColor: 'black',
        width: '85%'
    },
    title: {
        paddingHorizontal: 20,
        marginTop: 50
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    section: {
        alignItems: "center",
        marginHorizontal: 20,
        flexDirection: "row",
        marginTop: 40
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold"
    },
    foodCanvas: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 15,
    }

})
