import React from 'react';
import {Image, StyleSheet, View} from "react-native";
import ThemeColors from "../config/colors";
import {MaterialCommunityIcons} from '@expo/vector-icons';


function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" size={30} color="white"/>
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" size={30} color="#fff"/>
            </View>
            <Image resizeMode="contain" style={styles.image} source={require('../assets/chair.jpg')}/>
        </View>
    );
}


const styles = StyleSheet.create({
    closeIcon: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        width: 40,
        height: 40,
        backgroundColor: ThemeColors.primary,
        position: "absolute",
        top: 30,
        left: 20
    },
    deleteIcon: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        width: 40,
        height: 40,
        backgroundColor: ThemeColors.secondary,
        position: "absolute",
        top: 30,
        right: 20
    },
    container: {
        backgroundColor: "#000",
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%'
    }
})
export default ViewImageScreen;