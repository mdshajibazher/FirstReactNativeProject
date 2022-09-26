import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from "react-native";
import colors from "../config/colors";
import { AntDesign } from '@expo/vector-icons';

function ListItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <AntDesign name="delete" size={28} color={colors.white} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 70,
        backgroundColor: colors.danger,
        justifyContent: "center",
        alignItems: "center"
    }
})
export default ListItemDeleteAction;