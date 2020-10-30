import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ExploreScreen = () => {
    return (
        <View style={styles.main}>
            <Text> Explore Screen</Text>
        </View>
    )
}

export default ExploreScreen

const styles = StyleSheet.create({
    main:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
