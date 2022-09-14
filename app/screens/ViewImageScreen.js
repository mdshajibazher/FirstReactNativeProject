import React from 'react';
import {Image, StyleSheet, View} from "react-native";
import ThemeColors from "../config/colors";
function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image resizeMode="contain" style={styles.image} source={require('../assets/chair.jpg')} />
        </View>
    );
}


const styles = StyleSheet.create({
    closeIcon:{
      width: 50,
      height: 50,
      backgroundColor: ThemeColors.primary,
        position: "absolute",
        top: 30,
        left: 20
    },
    deleteIcon:{
        width: 50,
        height: 50,
        backgroundColor: ThemeColors.secondary,
        position: "absolute",
        top: 30,
        right: 20
    },
    container: {
      backgroundColor: "#000",
      flex: 1,
    },
    image:{
        width: '100%',
        height: '100%'
    }
})
export default ViewImageScreen;