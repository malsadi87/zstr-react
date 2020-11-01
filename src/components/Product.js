import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'

export class Product extends Component {
    render() {
        return (
            <TouchableOpacity
            onPress={this.props.onPress}
            style={styles.container}
          >
              <View style={styles.header}>
                  <Image
                    source={require('../images/3.png')}
                    style={{height:25,width:20}}
                  />
                  <Text style={styles.headerTitle}>
                      {this.props.title}
                  </Text>
              </View>
              <Image
                source={this.props.image}
                style={styles.foodPictute}
              />
              <Text style={styles.foodName}>
                  {this.props.name}
              </Text>
              <Text style={styles.foodDetails}>
                  {this.props.details}
              </Text>

              <Text style={styles.foodPrice}>
                 {this.props.price}
              </Text>
          </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:"#f5f5fa",
        height:260,
        width:185,
        borderRadius:20,
        marginRight:10
    }, 
    header:{
        flexDirection:"row",
        alignItems:"center",
        alignSelf:"center",
        marginTop:20
    },
    headerTitle:{
        paddingHorizontal:10,
        fontWeight:"bold",
        fontSize:16
    },
    foodPictute:{
        height:105,
        alignSelf:"center",
        width:130,
        marginTop:15,
        marginBottom:15
    },
    foodName:{
        fontSize:18,
        fontWeight:"bold",
        paddingHorizontal:10
    },
    foodDetails:{
        fontSize:15,
        fontWeight:"bold",
        paddingHorizontal:10,
        color:"#848385"
    },
    foodPrice:{
        fontSize:15,
        fontWeight:"bold",
        paddingHorizontal:10,
        color:"red",
        alignSelf:"flex-end"
    }

})

export default Product
