import React, {useState} from 'react'
import { StyleSheet, TextInput, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

import Animated from 'react-native-reanimated'
import BottomSheet from 'reanimated-bottom-sheet'
import ImagePicker from 'react-native-image-crop-picker'


const EditProfileScreen = () => {
    const [image, setImage] = useState('https://malsadi87.github.io/assets/img/mohammed.jpg');

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
          compressImageMaxWidth: 300,
          compressImageMaxHeight: 300,
          cropping: true,
          compressImageQuality: 0.7
        }).then(image => {
          console.log(image);
          setImage(image.path);
          this.bs.current.snapTo(1);
        });
      }
    
      const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
          width: 300,
          height: 300,
          cropping: true,
          compressImageQuality: 0.7
        }).then(image => {
          console.log(image);
          setImage(image.path);
          this.bs.current.snapTo(1);
        });
      }
    
    
    
    const renderInner = () => (
        <View style={styles.panel}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.panelTitle}>Upload Photo</Text>
                <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
            </View>
            <TouchableOpacity style={styles.appButtonContainer} onPress={takePhotoFromCamera}>
                <Text style={styles.appButtonText}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appButtonContainer} onPress={choosePhotoFromLibrary}>
                <Text style={styles.appButtonText}>Choose From Library</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.appButtonContainer}
                onPress={() => this.bs.current.snapTo(1)}>
                <Text style={styles.appButtonText}>Cancel</Text>
            </TouchableOpacity>
        </View>
    )
    
    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle} />
            </View>
        </View>
    )
    
    bs = React.createRef()
    fall = new Animated.Value(1)

    return (
        <View style={styles.container}>
            <BottomSheet
                ref={this.bs}
                snapPoints={[350, 0]}
                initialSnap={1}
                enabledGestureInteraction={true}
                renderContent={renderInner}
                renderHeader={renderHeader}
            />
            <Animated.View style={{
                margin: 20,
                opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
            }}>
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity onPress={() => { this.bs.current.snapTo(0) }}>
                        <View style={styles.profileImageContainer}>
                            <ImageBackground
                                style={{ width: 100, height: 100, marginBottom:25 }}
                                imageRef={{ borderRadius: 15 }}
                                source={{ uri: image }}>
                                <View style={styles.center}>
                                    <Icon name="camera" size={35} color="#fff" style={styles.cameraIcon} />
                                </View>
                            </ImageBackground>
                            
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color="#05375a" size={20} />
                    <TextInput
                        placeholder="First Name"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[
                            styles.textInput,
                            {
                                color:"#05375a",
                            },
                        ]}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color="#05375a" size={20} />
                    <TextInput
                        placeholder="Last Name"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[
                            styles.textInput,
                            {
                                color:"#05375a",
                            },
                        ]}
                    />
                </View>
                <View style={styles.action}>
                    <Feather name="phone" color="#05375a" size={20} />
                    <TextInput
                        placeholder="Phone"
                        placeholderTextColor="#666666"
                        keyboardType="number-pad"
                        autoCorrect={false}
                        style={[
                            styles.textInput,
                            {
                                color:"#05375a",
                            },
                        ]}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="envelope-o" color="#05375a" size={20} />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#666666"
                        keyboardType="email-address"
                        autoCorrect={false}
                        style={[
                            styles.textInput,
                            {
                                color:"#05375a",
                            },
                        ]}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="globe" color="#05375a" size={20} />
                    <TextInput
                        placeholder="Country"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[
                            styles.textInput,
                            {
                                color:"#05375a",
                            },
                        ]}
                    />
                </View>
                <View style={styles.action}>
                    <Icon name="map-marker-outline" color="#05375a" size={20} />
                    <TextInput
                        placeholder="City"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[
                            styles.textInput,
                            {
                                color:"#05375a",
                            },
                        ]}
                    />
                </View>
                <TouchableOpacity style={styles.appButtonContainer} onPress={() => { }}>
                    <Text style={styles.appButtonText}>Submit</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    )
}

export default EditProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#009387',
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#009387',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    profileImageContainer: {
        height: 100,
        width: 100,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraIcon: {
        opacity: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    appButtonContainer: {
        marginTop:10,
        backgroundColor: "#009387",
        borderRadius: 30,
        paddingVertical: 14,
        paddingHorizontal: 14,
        width:"70%",
        alignSelf:"center"
      },
      appButtonText: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        alignItems:"center"
      }
})