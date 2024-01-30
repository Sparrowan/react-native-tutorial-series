import React from 'react'
import { SafeAreaView, StyleSheet, Platform, StatusBar, Text, View } from 'react-native'

const DemoScreen = () => {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "white",
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        }}>
            <View>
                <Text>DemoScreen</Text>
            </View>
        </SafeAreaView>
    )
}

export default DemoScreen