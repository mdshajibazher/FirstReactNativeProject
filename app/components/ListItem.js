import React from "react";
import {View, StyleSheet, Image, TouchableOpacity} from "react-native";
import AppText from "./AppText";
import {GestureHandlerRootView,Swipeable} from 'react-native-gesture-handler';




import colors from "../config/colors";
import {TouchableHighlight} from "react-native";

function ListItem({title, subTitle, image,imageComponent, onPress,renderRightActions}) {
    return (
        <GestureHandlerRootView>
        <Swipeable renderLeftActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    {image && <Image style={styles.image} source={image}/> }
                    {imageComponent && imageComponent}
                    <View style={{marginLeft:10,justifyContent: "center"}}>
                        {title && <AppText style={styles.title}>{title}</AppText> }
                        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText> }
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
        marginVertical: 5,
        padding: 15,
        backgroundColor: colors.white
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
