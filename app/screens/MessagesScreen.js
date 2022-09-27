import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";
import ListItemDeleteAction from "../components/ListItemDeleteAction";


function MessagesScreen(props) {
    const handleDelete = (item) => {
        let filteredMessages = messages.filter(message => {
            return message.id !== item.id;
        })
        setMessages(filteredMessages);
    }
    const [refreshing,setRefreshing] = useState(false)
    const [messages,setMessages] = useState([
        {
            id: 1,
            title: 'T1',
            description: 'D1',
            image: require('../assets/mosh.jpg')
        },
        {
            id: 2,
            title: 'T2',
            description: 'D2',
            image: require('../assets/mosh.jpg')
        },
        {
            id: 3,
            title: 'T3',
            description: 'D3',
            image: require('../assets/mosh.jpg')
        }
    ]);



    return (
       <Screen>
        <FlatList
            data={messages}
            renderItem={({item,index,seperator}) =>
                <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log('pressed',item)}
                    renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
                />
        }
            keyExtractor={message => message.id.toString()}
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages([        {
                    id: 1,
                    title: 'T1 After Refresh',
                    description: 'D1 After Refresh',
                    image: require('../assets/mosh.jpg')
                }]);
            }}
        />
       </Screen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;