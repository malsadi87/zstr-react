import React, { useState } from 'react'
import {
    StyleSheet,
    Text, View,
    Platform, Dimensions, TouchableOpacity,
    TextInput
} from 'react-native'

import * as Animatable from 'react-native-animatable'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import Feather from 'react-native-vector-icons/Feather'


const SignUpScreen = ({ navigation }) => {
    // state hook
    const [data, setData] = useState({
        email: '',
        password: '',
        secureTextEntry: true,
        check_emailInputChange: false
    })

    const emailInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                email: val,
                check_emailInputChange: true
            })
        } else {
            setData({
                ...data,
                email: val,
                check_emailInputChange: false
            })
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Resgister Now!</Text>
            </View>
            <Animatable.View 
                style={styles.footer}
                animation="fadeInUpBig">
                <View style={{justifyContent:"center", alignItems:"center"}}>
                    <Text style={styles.text_footer}> Sign Up Form</Text>
                </View>
                 {/* Full name */}
                <View style={[styles.action, {marginTop: 30}]}>
                    <FontAwesome
                        name="user-o"
                        size={20}
                        color="#05375a"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="name and surname"
                        autoCapitalize="none"
                        onChangeText={(val) => {}}
                    />
                </View>

                 {/* email */}   
                <View style={[styles.action, {marginTop: 15}]}>
                    <FontAwesome
                        name="envelope-o"
                        size={20}
                        color="#05375a"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Your email address"
                        autoCapitalize="none"
                        onChangeText={(val) => emailInputChange(val)}
                    />
                    {data.check_emailInputChange ?
                        <Animatable.View
                            animation="bounceIn">
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                        : null}
                </View>

                {/* Password */}
                <View style={[styles.action, {marginTop: 15}]}>
                    <Feather
                        name="lock"
                        size={20}
                        color="#05375a"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Your password"
                        autoCapitalize="none"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="grey"
                                size={20}
                            />
                            :
                            <Feather
                                name="eye"
                                color="grey"
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>

                {/* Address */}
                <View style={[styles.action, {marginTop: 15}]}>
                    <FontAwesome
                        name="map-o"
                        size={20}
                        color="#05375a"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Your address"
                        autoCapitalize="none"
                        onChangeText={(val) => {}}
                    />
                </View>

                {/* Mobile */}
                <View style={[styles.action, {marginTop: 15}]}>
                    <FontAwesome5
                        name="mobile-alt"
                        size={20}
                        color="#05375a"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Your Mobile"
                        autoCapitalize="none"
                        onChangeText={(val) => {}}
                    />
                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={() => {  }}
                        style={styles.appButtonContainer}
                    >
                        <Text style={styles.appButtonText}>Sign Up</Text>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.navigate('SignIn') }}
                        style={[styles.appButtonContainer, {
                            borderWidth: 1,
                            borderColor: "#009387",
                            backgroundColor: "#fff",
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.appButtonText, {
                            color: "#009387"
                        }]}>Sign In</Text>

                    </TouchableOpacity>

                </View>

            </Animatable.View>
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#FF6347'
        backgroundColor: "#009387"

    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    appButtonContainer: {
        backgroundColor: "#009387",
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 15,
        flexDirection: "row",
        width: "70%",
        justifyContent: "center",
        alignItems: "center"
    },
    appButtonText: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        //textTransform: "uppercase"
    }
})
