import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import {
    ScrollView,
    TouchableOpacity} 
    from 'react-native-gesture-handler'

import Icon from 'react-native-vector-icons/Ionicons'    

const DetailsScreen = ({navigation}) => {

    return (
        <View style={{backgroundColor:"#FFF"}}>
            <ScrollView>
                <View style={styles.headerRow}>
                    <View style={{width:"10%"}}>
                         <TouchableOpacity
                             onPress={()=>navigation.goBack()}
                         >
                             <Image
                                 source={require('../images/2.png')}
                             />
                         </TouchableOpacity>
                    </View>
                    <View style={{width:"80%",alignItems:"center"}}>
                         <View style={styles.headerRowTitle}>
                             <Image
                                 source={require('../images/3.png')}
                                 style={{height:25,width:20}}
                             />
                             <Text style={{
                                 paddingHorizontal:10,
                                 fontWeight:"bold",
                                 fontSize:16
                             }}>290 Calories</Text>
                         </View>
                    </View>
                    <View style={{width:"10%"}}>
                             <Icon
                                 name="heart"
                                 color="#f9dd7a"
                                 size={30}
                             />
                    </View>
                </View>
                <Image
                     source={require('../images/5.png')}
                     style={styles.foodIcon}
                />
                <View style={styles.qunatityContainer}>
                   <TouchableOpacity onPress={()=>{}}>
                       <Text style={{
                           fontWeight:"bold",
                           fontSize:18
                       }}>+</Text>
                   </TouchableOpacity> 
                   
                   <Text style={{
                       fontSize:18,
                       fontWeight:"bold",
                       paddingHorizontal:20
                   }}>
                       3
                   </Text>

                   <TouchableOpacity
                    onPress={this.subtractQuantity}
                   >
                       <Text style={{
                           fontWeight:"bold",
                           fontSize:18
                       }}>-</Text>
                   </TouchableOpacity> 
                </View>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:20,
                    marginTop:30
                }}>
                    <View>
                        <Text style={styles.name}>Smokehouse </Text>
                        <Text style={styles.descrpition}>
                            Beef burger
                        </Text>
                    </View>
            <Text style={styles.price}>$12</Text>
                </View>
                <Text style={styles.sectionTitle}>
                    Ingredients
                </Text>
                
                <ScrollView
                 horizontal
                 showsHorizontalScrollIndicator={false}
                 style={{marginTop:20,marginHorizontal:20}}
                >
                    <View style={styles.ingredients}>
                        <Image
                         source={require('../images/11.png')}
                         style={styles.ingredientsIcon}
                        />
                    </View>

                    <View style={styles.ingredients}>
                        <Image
                         source={require('../images/13.png')}
                         style={styles.ingredientsIcon}
                        />
                    </View>

                    <View style={styles.ingredients}>
                        <Image
                         source={require('../images/12.png')}
                         style={styles.ingredientsIcon}
                        />
                    </View>

                    <View style={styles.ingredients}>
                        <Image
                         source={require('../images/8.png')}
                         style={styles.ingredientsIcon}
                        />
                    </View>

                    <View style={styles.ingredients}>
                        <Image
                         source={require('../images/bl.png')}
                         style={styles.ingredientsIcon}
                        />
                    </View>

                    <View style={styles.ingredients}>
                        <Image
                         source={require('../images/7.png')}
                         style={styles.ingredientsIcon}
                        />
                    </View>
                </ScrollView>
                <Text style={styles.sectionTitle}>
                    Details
                </Text>
                <Text style={styles.details}>
                    The most unique fire grilled patty,
                    flame grilled, charred, seared, well-done
                    All natural beef, grass-feed beef,
                    Fiery, juicy, greacy. delicous moist 
                    The most unique fire grilled patty,
                    flame grilled, charred, seared, well-done
                    All natural beef, grass-feed beef,
                    Fiery, juicy, greacy. delicous moist
                </Text>
            </ScrollView>
            <View style={styles.shopping}>
                <Icon
                 name="add-circle-outline"
                 size={24}
                 color="#FFF"
                />
            </View>
         </View>

    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    headerRow:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:40,
        marginHorizontal:20
    },
    headerRowTitle:{
        flexDirection:"row",
        alignItems:"center",
        alignSelf:"center"
    },
    foodIcon:{
        height:300,
        width:300,
        alignSelf:"center"
    },
    qunatityContainer:{
        flexDirection:"row",
        alignSelf:"center",
        alignItems:"center",
        backgroundColor:"#f6f3fb",
        paddingHorizontal:20,
        paddingVertical:8,
        borderRadius:20
    },
    sectionTitle:{
        fontWeight:"bold",
        fontSize:20,
        marginTop:30,
        marginHorizontal:20
    },
    price:{
        fontWeight:"bold",
        fontSize:28,
        marginLeft:80
    },
    descrpition:{
        fontWeight:"bold",
        fontSize:15,
        color:"#a4a4a9"
    },
    name:{
        fontWeight:"bold",
        fontSize:25
    },
    ingredients:{
        borderRadius:15,
        borderWidth:0.1,
        paddingHorizontal:12,
        paddingVertical:8,
        marginRight:10
    },
    ingredientsIcon:{
        height:30,
        width:30
    },
    details:{
        color:"#a4a4a9",
        fontWeight:"bold",
        fontSize:15,
        marginTop:10,
        marginHorizontal:20,
        textAlign:"justify"
    },
    shopping:{
        position:"absolute",
        backgroundColor:"#000",
        height:50,
        width:50,
        bottom:20,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center",
        borderRadius:25
    }
})
