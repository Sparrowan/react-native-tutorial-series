import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import ActionRow from '../components/ActionRow';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView>
                <View style={styles.scrollContent}>
                    <TouchableOpacity style={styles.upgradeIcon} onPress={() => console.log(`Pressed ${Math.floor(Math.random() * 11)}`)}>
                        <Ionicons name='person-circle' size={30} color='#E5962D' />
                        <Text style={styles.upgradeText}>UPGRADE</Text>
                    </TouchableOpacity>
                    <Image
                        source={{ uri: "https://i.imgur.com/e14NE49.png" }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.actionButtonsContainer}>
                    <View style={styles.topActionRows}>
                        <ActionRow
                            title='Track Work out'
                            screen='Demo'
                            color='#E5962D'
                            icon='fitness'
                            vertical
                        />
                        <ActionRow
                            title='Browse workouts'
                            screen='Demo'
                            color='#1982C4'
                            icon='library'
                            vertical
                        />
                    </View>
                    <ActionRow
                        title='Connet with Friends'
                        screen='Demo'
                        color='#F44174'
                        icon='share-social'
                        vertical
                    />
                    <ActionRow
                        title='Add an Excercise'
                        screen='Demo'
                        color='#8AC926'
                        icon='add-circle'
                    />
                    <ActionRow
                        title='Create a Routine'
                        screen='Demo'
                        color='#C03221'
                        icon='time'
                    />
                    <ActionRow
                        title='Join Challenge'
                        screen='Demo'
                        color='#23967F'
                        icon='trophy'
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        position: 'relative',
    },
    scrollContent: {
        paddingVertical: 50,
    },
    upgradeIcon: {
        position: 'absolute',
        top: 50,
        right: 10,
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    upgradeText: {
        color: '#E5962D',
        textAlign: 'center'
    },
    image: {
        width: '100%',
        height: 200
    },
    actionButtonsContainer: {
        paddingHorizontal: 15,
        marginTop: -25,
        gap: 10
    },
    topActionRows: {
        flexDirection: 'row',
        gap: 10
    }
});