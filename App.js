import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; 
import ListScreen from "./screens/ListScreen";
import ListScreen1 from "./screens/ListScreen";
import InfoScreen from "./screens/ListScreen";
import ButtonScreen from "./screens/ButtonScreen";
import QuizScreen from "./screens/ButtonScreen";
import MenuScreen from "./screens/MenuScreen";
import StudentScreen from "./screens/StudentScreen";
import ProfileScreen from "./screens/ProfileScreen";
import BoxScreen from "./screens/BoxScreen";
import AdvancedBoxScreenChallange from "./screens/BoxScreen";
import PostsScreen from "./screens/PostScreen";
import UserScreen from "./screens/UserScreen";
import UserPostsScreen from "./screens/UserPostsScreen";
import PhotoScreen from "./screens/PhotoScreen";
import CountriesScreen from "./screens/CountryScreen";
import CountriyDetailsScreen from "./screens/CountryDetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Main" component={MenuScreen}></Stack.Screen>
          <Stack.Screen name="List" component={ListScreen}></Stack.Screen>
          <Stack.Screen name="Button" component={ButtonScreen}></Stack.Screen>
          <Stack.Screen name="Menu" component={MenuScreen}></Stack.Screen>
          <Stack.Screen name="Students" component={StudentScreen}></Stack.Screen>
          <Stack.Screen name="Box" component={BoxScreen}></Stack.Screen>
          <Stack.Screen name="Advanced Box" component={AdvancedBoxScreenChallange}></Stack.Screen>
          <Stack.Screen name="Posts" component={PostsScreen}></Stack.Screen>
          <Stack.Screen name="Users" component={UserScreen}></Stack.Screen>
          <Stack.Screen name="UsersPosts" component={UserPostsScreen}></Stack.Screen>
          <Stack.Screen name="Photo" component={PhotoScreen}></Stack.Screen>
          <Stack.Screen name="Countries" component={CountriesScreen}></Stack.Screen>
          <Stack.Screen name="Details" component={CountriyDetailsScreen}></Stack.Screen>


        </Stack.Navigator>
    </NavigationContainer>
  );
} 
