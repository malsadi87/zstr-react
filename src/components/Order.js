import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Order = ({ order, onPress }) => {
    return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.cardImgWrapper}>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>{order.item.name}</Text>
          
          <View>
            <Text style={styles.mealPrice}>{order.amount}</Text>
          </View>
        </View>

      </View>
    </TouchableOpacity>
    )
}

export default Order

const styles = StyleSheet.create({
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
    cardIngredients: {
      marginTop: 5,
      color: '#009387',
      fontSize: 12
    },
    mealPrice:{
      marginTop:5,
      color:"red",
      fontWeight:"bold"
    }
  })
