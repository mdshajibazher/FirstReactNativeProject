import WelcomeScreens from "./app/screens/WelcomeScreens";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import {View} from 'react-native';
import AppText from "./app/components/AppText";
import { MaterialIcons } from '@expo/vector-icons';
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreens from "./app/screens/ListingDetailsScreens";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";

export default function App() {
  return (
     <Screen>
         <Icon
             name="email"
             size={50}
             backgroundColor = "red"
             iconColor = "white"
         >
         </Icon>
     </Screen>
  )
}
