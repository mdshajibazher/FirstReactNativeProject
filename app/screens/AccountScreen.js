import React from 'react';
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import {FlatList, StyleSheet, View} from "react-native";
import colors from "../config/colors";
import Icon from "../components/Icon";

const menuItems = [
    {
        title : "My Listings",
        icon: {
            name: "format-list-bulleted",
             backgroundColor: colors.primary
        }
    },

    {
        title : "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    },

];

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title={"Shajib Hamedani"}
                    subTitle={"mdshajibazher@gmail.com"}
                    image={require("../assets/mosh.jpg")}
                />
            </View>

            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={item => item.title}
                    renderItem={({item}) =>
                    <ListItem
                        title={item.title}
                        imageComponent={
                            <Icon
                                name={item.icon.name}
                                backgroundColor={item.icon.backgroundColor}
                            />
                        }
                    />
                 } />
            </View>

            <ListItem
                title="Logout"
                imageComponent={
                    <Icon
                        name="logout"
                        backgroundColor={colors.danger}
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light
    }
})

export default AccountScreen;