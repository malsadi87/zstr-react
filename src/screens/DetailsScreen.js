import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const DetailsScreen = ({navigation}) => {
    return (
        <View style={styles.details}>
            <Text>Details Screen</Text>
            <Button
            title = "Go Back"
            onPress = {()=> navigation.goBack()}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    details:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
export default DetailsScreen
