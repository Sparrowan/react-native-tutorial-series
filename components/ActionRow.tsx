import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';

type Props = {
    title: string;
    screen: any;
    color: string;
    requiresPro?: boolean;
    icon?: any;
    vertical?: boolean;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

const ActionRow = ({
    title,
    screen,
    color,
    requiresPro,
    icon,
    vertical,
}: Props) => {
    const navigation = useNavigation<NavigationProp>()
    return (
        <TouchableOpacity style={{
            backgroundColor: color, padding: 16, borderRadius: 10,
            flex: 1,
            flexDirection: `${vertical ? 'column' : 'row'}`,
            justifyContent: 'center',
            alignItems: 'center',
            height: 70,
            margin: 2
        }} onPress={() => navigation.navigate(screen)}>
            <Ionicons name={icon} size={30} color='white' />
            <Text style={styles.rowText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default ActionRow;

const styles = StyleSheet.create({
    rowText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20
    }
})
