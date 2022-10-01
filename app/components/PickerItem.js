import React from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

function PickerItem({label,onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>
                {label}
            </AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 15,
        backgroundColor: colors.light,
        marginVertical: 2,
        borderRadius: 5
    }
})
export default PickerItem;