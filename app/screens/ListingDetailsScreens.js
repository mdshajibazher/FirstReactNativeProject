import React from 'react';
import {Image, View, StyleSheet} from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreens(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red Jacket For Sale</AppText>
                <AppText style={styles.price}>$100</AppText>
                <ListItem
                    image={require("../assets/mosh.jpg")}
                    title="Mosh Hamedani"
                    subTitle="5 Listing"
                >

                </ListItem>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
        marginVertical: 10,
    },

    price: {
        color: colors.secondary,
    },
    detailsContainer: {
        padding: 20
    }
})

export default ListingDetailsScreens;