import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import {
    DrawerItem,
    DrawerContentScrollView
} from '@react-navigation/drawer'

import {PROFILE_END_POINT, MASTER_KEY_TOKEN} from '../model/end-points'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'

import {AuthContext} from './context'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const DrawerContent = (props) => {

    const {signOut} = useContext(AuthContext)
    const [profile, setProfile] = useState({})

    useEffect(()=>{

        const getProfileData = async () => {
              
            let userId = null
            let userToken = null
            try {
              userId = await AsyncStorage.getItem('userId')
              userToken = await AsyncStorage.getItem('userToken')
            } catch (e) {
              // saving error
              console.log(e)
            }
  
          fetch(PROFILE_END_POINT,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json', 
                Authorization: 'Bearer ' + userToken
            }
        })
              .then((response) => response.json())
              .then((responseData) => {
                  //const filtered_results = responseData.rows.filter(row => row.chef.id == userId)
                  console.log("My Profile " + JSON.stringify(responseData))
                  setProfile(responseData)
              }).done()
        }
            getProfileData()
    },[])

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} >
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                            <Avatar.Image
                                source={{ uri: profile.picture }}
                                size={50} />
                            <View style={{ marginLeft: 20 }}>
                                <Title style={styles.title}>{profile.name}</Title>
                                <Caption style={styles.caption}>{profile.city}</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>

                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>1000</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="home-outline"
                                    color={color}
                                    size={size}

                                />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate('Home')}}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="account-outline"
                                    color={color}
                                    size={size}

                                />
                            )}
                            label="Profile"
                            onPress={() => { props.navigation.navigate('Profile') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="bookmark-outline"
                                    color={color}
                                    size={size}

                                />
                            )}
                            label="Bookmarks"
                            onPress={() => { props.navigation.navigate('Bookmark')}}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="message-settings-outline"
                                    color={color}
                                    size={size}

                                />
                            )}
                            label="Settings"
                            onPress={() => { props.navigation.navigate('Settings')}}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="account-check-outline"
                                    color={color}
                                    size={size}

                                />
                            )}
                            label="Support"
                            onPress={() => { props.navigation.navigate('Support') }}
                        />
                    </Drawer.Section>

                    <Drawer.Section title="Preferences">
                        <TouchableRipple>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <Switch />
                            </View>
                        </TouchableRipple>

                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="exit-to-app"
                            color={color}
                            size={size}

                        />
                    )}
                    label="Sign out"
                    onPress={() => { 
                        setProfile({})
                        signOut() }}
                />
            </Drawer.Section>
        </View>
    )
}

export default DrawerContent

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    }

})
