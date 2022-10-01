import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Platform, TouchableWithoutFeedback, Modal, Button, FlatList} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from '../config/styles';
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";
function AppPicker({icon,placeholder,items,onSelectItem,selectedItem}) {
    const [modalVisible,setModalVisible] = useState(false);
    const handleTapCategory = (item) => {
       setModalVisible(false);
       onSelectItem(item)
    }
    return (
        <>

        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style={styles.container}>
                {icon && <MaterialCommunityIcons name={icon} size={25} color={colors.medium}  style={styles.icon}/> }
              <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                <MaterialCommunityIcons name="chevron-down" size={25} color={colors.medium} />
            </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
            <Screen>
                <Button title="Close" onPress={() => setModalVisible(false)} />
                <FlatList
                    data={items}
                    keyExtractor={item => items.value}
                    renderItem={({item}) =>
                        <PickerItem
                            key={item.value}
                            label={item.label}
                            onPress={() => handleTapCategory(item)}
                        />
                    }
                />
            </Screen>
        </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
    },

    icon: {
        marginRight: 10,
    },
    text:{
        flex: 1,
    }
})


export default AppPicker;