import React from "react";
import {View, StyleSheet, Image, TouchableOpacity} from "react-native";
import AppText from "./AppText";
import {GestureHandlerRootView,Swipeable} from 'react-native-gesture-handler';




import colors from "../config/colors";
import {TouchableHighlight} from "react-native";

function ListItem({title, subTitle, image, onPress,renderRightActions}) {
    return (
        <GestureHandlerRootView>
        <Swipeable renderLeftActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    <Image style={styles.image} source={image}/>
                    <View>
                        <AppText style={styles.title}>{title}</AppText>
                        <AppText style={styles.subTitle}>{subTitle}</AppText>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
            </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 5
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    subTitle: {
        color: colors.medium,
    },
    title: {
        fontWeight: "500",
    },
});

export default ListItem;
