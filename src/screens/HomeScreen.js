import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.home}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details Screen"
                onPress={() => { navigation.navigate("Details") }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default HomeScreen
