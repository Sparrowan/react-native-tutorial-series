import React from 'react'
import { SafeAreaView, StyleSheet, Platform, StatusBar, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';


export type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Demo'>

const DemoScreen = () => {
    const navigation = useNavigation<NavigationProp>()

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <TouchableOpacity onPress={navigation.goBack} style={styles.backContainer}>
                <Ionicons name='arrow-back' size={50} color='white' />
                <Text style={styles.goBacktext}>Go back</Text>
            </TouchableOpacity>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 50,
                flex: 1
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 30,
                    fontWeight: '800'
                }}>Hooray!</Text>
                <Text style={{
                    color: 'white',
                    fontSize: 30,
                    fontWeight: '800',
                    marginBottom: 50
                }}>You have acccess to this feature</Text>
                <Ionicons name='build-outline' size={200} color='white' />
                <View style={{
                    marginTop: -60,
                    marginLeft: -50
                }}>
                    <Ionicons name='checkmark-circle-sharp' size={60} color='#96F550' />
                </View>
                <Text style={{
                    color: 'white',
                    marginTop: 70,
                    flex: 1,
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    This is where you create a screen change the default content to match your requirements.
                    Change as much as you want and do not forget the navigation.
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default DemoScreen

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: "#E5962D",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    goBacktext: {
        color: 'white'
    },
    backContainer: {
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center'

    }
})