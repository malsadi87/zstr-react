import React, { useState, useContext } from 'react'
import {
    StyleSheet,
    Text, View,
    Platform, TouchableOpacity,
    TextInput,
    Alert
} from 'react-native'


import * as Animatable from 'react-native-animatable'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'

import { AuthContext } from '../components/context'

import { REGISTER_END_POINT, MASTER_KEY_TOKEN, MEALS_END_POINT } from '../model/end-points'


const SignUpScreen = ({ navigation }) => {
    // state hook
    const [data, setData] = useState({
        name: '',
        role: '',
        city: '',
        mobile: '',
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
    const { signUp } = useContext(AuthContext)

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        })
    }

    const handleNameChange = (val) => {
        setData({
            ...data,
            name: val
        })
    }

    const handleMobileChange = (val) => {
        setData({
            ...data,
            mobile: val
        })
    }

    const handleRoleChange = (val) => {
        setData({
            ...data,
            role: val
        })
    }

    const handleCityChange = (val) => {
        setData({
            ...data,
            city: val
        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const submitForm = (val) => {

        const newUser = {
            name: data.name,
            email: data.email,
            password: data.password,
            role: data.role,
            mobile: data.mobile,
            city: data.city
        }

        fetch(REGISTER_END_POINT, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json', 
                Authorization: 'Bearer ' + MASTER_KEY_TOKEN
            },
            body: JSON.stringify(newUser)
        })
            .then(response => {
                if(response.status == 201)
                     return response.json()
            })
            .then(data => {
                console.log(data)
                Alert.alert(
                    'Registration',
                    'Your account is successfully created!',
                    [
                      //{text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                      {text: 'Sign In', onPress: () => {navigation.navigate('SignIn')}},
                    ],
                    { cancelable: false }
                  )
            })
            .catch(error => console.log(' error : ' + error.message))

        
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Resgister Now!</Text>
            </View>
            <Animatable.View
                style={styles.footer}
                animation="fadeInUpBig">
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Text style={styles.text_footer}> Sign Up Form</Text>
                </View>
                {/* name */}
                <View style={[styles.action, { marginTop: 30 }]}>
                    <FontAwesome
                        name="user-o"
                        size={20}
                        color="#05375a"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="name-surname"
                        autoCapitalize="none"
                        onChangeText={(val) => handleNameChange(val)}
                    />
                </View>


                {/* username 
                <View style={[styles.action, { marginTop: 15 }]}>
                    <FontAwesome
                        name="user-circle-o"
                        size={20}
                        color="#05375a"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="username"
                        autoCapitalize="none"
                        onChangeText={(val) => handleUsernameChange(val)}
                    />
                </View>*/}

                {/* email */}
                <View style={[styles.action, { marginTop: 15 }]}>
                    <FontAwesome
                        name="envelope-o"
                        size={20}
                        color="#05375a"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="email"
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
                <View style={[styles.action, { marginTop: 15 }]}>
                    <Feather
                        name="lock"
                        size={20}
                        color="#05375a"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="password"
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

                {/* city */}
                <View style={[styles.action, { marginTop: 15 }]}>
                    <FontAwesome
                        name="street-view"
                        size={20}
                        color="#05375a"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="city"
                        autoCapitalize="none"
                        onChangeText={(val) => handleCityChange(val)}
                    />
                </View>

                {/* country 
                <View style={[styles.action, { marginTop: 15 }]}>
                    <FontAwesome
                        name="map-o"
                        size={20}
                        color="#05375a"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="country"
                        autoCapitalize="none"
                        onChangeText={(val) => handleCountryChange(val)}
                    />
                </View>*/}

                {/* Mobile */}
                <View style={[styles.action, { marginTop: 15 }]}>
                    <FontAwesome5
                        name="mobile-alt"
                        size={20}
                        color="#05375a"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="mobile"
                        autoCapitalize="none"
                        onChangeText={(val) => handleMobileChange(val)}
                    />
                </View>

                {/* Role */}
                <View style={[styles.action, { marginTop: 15 }]}>
                    <FontAwesome5
                        name="odnoklassniki"
                        size={20}
                        color="#05375a"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Role : Enter either Cook or User"
                        autoCapitalize="none"
                        onChangeText={(val) => handleRoleChange(val)}
                    />
                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={() => { submitForm() }}
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
