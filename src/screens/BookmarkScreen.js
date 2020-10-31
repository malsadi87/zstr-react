import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BookmarkScreen = () => {
    return (
        <View style={styles.container}>
            <Text> Bookmark Screen</Text>
        </View>
    )
}

export default BookmarkScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
