import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; 
import ListScreen from "./screens/ListScreen";
import ListScreen1 from "./screens/ListScreen";
import InfoScreen from "./screens/ListScreen";
import ButtonScreen from "./screens/ButtonScreen";
import QuizScreen from "./screens/ButtonScreen";
import MenuScreen from "./screens/MenuScreen";
import StudentScreen from "./screens/StudentScreen";



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen name="Main" component={MenuScreen}></Stack.Screen>
          <Stack.Screen name="List" component={ListScreen}></Stack.Screen>
          <Stack.Screen name="Button" component={ButtonScreen}></Stack.Screen>
          <Stack.Screen name="Menu" component={MenuScreen}></Stack.Screen>
          <Stack.Screen name="Students" component={StudentScreen}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
} 
