import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'


const assets = require('../assets.js')


export class Category extends Component {
    render() {
        return (
            <View style={[styles.categories, {backgroundColor:this.props.color}]} >
                <Image
                    style={styles.categoryImage}
                    source={assets[this.props.imageURL]} 
                   />
                   <Text style={styles.categoryText}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    categories:{
        alignItems:"center",
        flexDirection:"row",
        marginHorizontal:15,
        marginVertical:5,
        borderRadius:25,
        paddingHorizontal:15,
        paddingVertical:5
    },
    categoryImage :{
        width:40,
        height:40
    },
    categoryText :{
      paddingLeft:10,
      fontSize:16,
      fontWeight:"bold"
  }
})

export default Category
