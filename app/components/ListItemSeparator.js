import React from 'react';
import {View,StyleSheet} from "react-native";
import colors from "../config/colors";

function ListItemSeparator() {
    return (
        <View style={styles.sep}></View>
    );
}

const styles = StyleSheet.create({
    sep: {
        width: "100%",
        height: 1,
        backgroundColor: colors.light
    }
})
export default ListItemSeparator;