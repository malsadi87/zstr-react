import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.logoCanvas}>
                    <Image
                        style={styles.logo}
                        source={require('../images/logo2.png')}
                        resizeMode="stretch" />
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.title}>Stay Connected with everyone</Text>
                <Text style={styles.text}>Sign in with account</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={()=> {alert("Clicked")} } 
                        style={styles.appButtonContainer}
                        >
                         <Text style={styles.appButtonText}>Get Started</Text>
                         <MaterialIcons
                         name="navigate-next"
                         color="#fff"
                         size={24}
                         />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SplashScreen

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#009387"
        //backgroundColor: '#FF6347'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logoCanvas: {
        backgroundColor: "#fff",
        borderWidth: 2,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    },
    appButtonContainer: {
        backgroundColor: "#009387",
        borderRadius: 15,
        paddingVertical: 12,
        paddingHorizontal: 12,
        flexDirection:"row"
      },
      appButtonText: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
})