import React from "react";
import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreens(props) {
    return (
        <ImageBackground blurRadius={5} style={styles.background} source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <Text style={styles.tagline}>Sale what you don't need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title={'Login'} color={'primary'} onPress={() => console.log('Tapped')}/>
                <AppButton title={'register'} color={'secondary'} onPress={() => console.log('Tapped')}/>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 20,
        width: "100%",
    },
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    tagline: {
        fontSize: 22,
        fontWeight: '600',
        paddingVertical: 20
    },

    logo: {
        width: 100,
        height: 100,

    },
    logoContainer:{
        position: "absolute",
        top: 80,
        alignItems: "center"
    }


})
export default WelcomeScreens;
