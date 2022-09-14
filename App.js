import WelcomeScreens from "./app/screens/WelcomeScreens";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import {View} from 'react-native';
import AppText from "./app/components/AppText";
export default function App() {
  return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
          <AppText>Lorem Ipsum Dolor</AppText>
      </View>
  )
}
