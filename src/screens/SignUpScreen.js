import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SignUpScreen = () => {
    return (
        <View style={styles.container}>
            <Text> Sign up</Text>
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
