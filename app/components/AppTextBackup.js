import React from 'react';
import {Text, StyleSheet, Platform} from "react-native";

function AppTextBackup(props){
    return(
        <Text style={styles.text}>{props.children}</Text>
    )
}


const styles = StyleSheet.create({
    text: {
        color: "tomato",
        ...Platform.select({
            ios: {
                fontSize: 17,
                fontFamily: "Avenir",
            },
            android: {
                fontSize: 18,
                fontFamily: "Roboto",
            }
        })
    }
})
export default  AppTextBackup;