import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps'

const ExploreScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Map</Text>
            <MapView
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
            </MapView>
        </View>
    )
}

export default ExploreScreen

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})
