import React from 'react';
import Screen from "../components/Screen";
import {FlatList,StyleSheet} from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";

const Listing = [
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 150,
        image: require('../assets/couch.jpg')
    }
];

function ListingScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={Listing}
                renderItem={({item}) =>
                    <Card
                        title={item.title}
                        subTitle={"$"+item.price}
                        image={item.image}
                    />
            }
                keyExtractor={listing => listing.id.toString()}

            />
        </Screen>
    );
}

const styles = StyleSheet.create({
     screen: {
         padding: 20,
         backgroundColor: colors.light
     }
})
export default ListingScreen;