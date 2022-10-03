import WelcomeScreens from "./app/screens/WelcomeScreens";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import {Switch, Text, TextInput, View} from 'react-native';
import AppText from "./app/components/AppText";
import { MaterialIcons } from '@expo/vector-icons';
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreens from "./app/screens/ListingDetailsScreens";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import {useState} from "react";
import LoginScreen from "./app/screens/LoginScreen";

const categories = [
    {label: "Furniture", value: 1},
    {label: "Clothing", value: 2},
    {label: "Cameras", value: 3},

];

export default function App() {

    return (
        <LoginScreen />
  )
}
