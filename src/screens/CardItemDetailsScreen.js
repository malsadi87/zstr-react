import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    StatusBar,
    Platform,
} from 'react-native'

import * as Animatable from 'react-native-animatable';
import MapView from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

const CardItemDetailsScreen = ({ route }) => {
    const itemData = route.params.itemData
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={[styles.section, styles.sectionLarge]}>
                <Text style={styles.sectionContent}>{itemData.description}</Text>
            </View>

            <View style={styles.section}>
                <View style={styles.categories}>
                    {itemData.categories.map((category, index) => (
                        <View style={styles.categoryContainer} key={index}>
                            <FontAwesome name="tag" size={16} color="#fff" />
                            <Text style={styles.category}>{category}</Text>
                        </View>
                    ))}
                </View>
            </View>

            <View style={[styles.section, { height: 250 }]}>
                <MapView
                    style={{ flex: 1 }}
                    region={{
                        latitude: itemData.coordinate.latitude,
                        longitude: itemData.coordinate.longitude,
                        latitudeDelta: 0.00864195044303443,
                        longitudeDelta: 0.000142817690068,
                    }}>
                    <MapView.Marker
                        coordinate={itemData.coordinate}
                    >
                        <Image
                            source={require('../images/marker1.png')}
                            style={{ width: 40, height: 40}}
                            resizeMode="contain"
                        />
                    </MapView.Marker>
                </MapView>
            </View>
        </View>
    )
}

export default CardItemDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: MAX_HEIGHT,
        width: Dimensions.get('window').width,
        alignSelf: 'stretch',
        resizeMode: 'cover',
    },
    title: {
        fontSize: 20,
    },
    name: {
        fontWeight: 'bold',
    },
    section: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: 'white',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    sectionContent: {
        fontSize: 16,
        textAlign: 'justify',
    },
    categories: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    categoryContainer: {
        flexDirection: 'row',
        backgroundColor: '#009387',
        borderRadius: 20,
        margin: 10,
        padding: 10,
        paddingHorizontal: 15,
    },
    category: {
        fontSize: 14,
        color: '#fff',
        marginLeft: 10,
    },
    titleContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageTitle: {
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 24,
    },
    navTitleView: {
        height: MIN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 40 : 5,
        opacity: 0,
    },
    navTitle: {
        color: 'white',
        fontSize: 18,
        backgroundColor: 'transparent',
    },
    sectionLarge: {
        minHeight: 300,
    },
})
