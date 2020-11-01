import React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'

import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ProfileScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{flexDirection:"row", marginTop:15}}>
                <Avatar.Image
                    source={{ uri: 'https://malsadi87.github.io/assets/img/mohammed.jpg' }}
                    size={80} />
                <View style={{marginLeft:20, marginTop:15}}>
                    <Title style={styles.title}>Mohammed Alsadi</Title>
                    <Caption style={styles.caption}>@alsadi</Caption>
                </View>
                </View>
            </View>
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name="map-marker-radius" color="#777777" size={20} />
                    <Text style={{marginLeft:20, color:"#777777"}}>London, GB</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="phone" color="#777777" size={20} />
                    <Text style={{marginLeft:20, color:"#777777"}}>+447724516138</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="email" color="#777777" size={20} />
                    <Text style={{marginLeft:20, color:"#777777"}}>mohammed@gmail.com</Text>
                </View>
            </View>

            <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox,{
                    borderRightColor:"#dddddd",
                    borderRightWidth:1
                }]}>
                    <Title>1200</Title>
                    <Caption>Points</Caption>
                </View>
                <View style={styles.infoBox}>
                    <Title>45</Title>
                    <Caption>Orders</Caption>
                </View>
            </View>

            <View style={styles.menuWrapper}>
                <TouchableRipple onPress={()=>{}}>
                    <View style={styles.menuItem}>
                        <Icon name="heart-outline" color="#ff6347" size={25} />
                        <Text style={styles.menuItemText}>Your Favourites</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={()=>{}}>
                    <View style={styles.menuItem}>
                        <Icon name="credit-card" color="#ff6347" size={25} />
                        <Text style={styles.menuItemText}>Payments</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={()=>{}}>
                    <View style={styles.menuItem}>
                        <Icon name="share-outline" color="#ff6347" size={25} />
                        <Text style={styles.menuItemText}>Tell Friends</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={()=>{}}>
                    <View style={styles.menuItem}>
                        <Icon name="account-check-outline" color="#ff6347" size={25} />
                        <Text style={styles.menuItemText}>Support</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={()=>{}}>
                    <View style={styles.menuItem}>
                        <Icon name="eye-settings-outline" color="#ff6347" size={25} />
                        <Text style={styles.menuItemText}>Settings</Text>
                    </View>
                </TouchableRipple>
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
})