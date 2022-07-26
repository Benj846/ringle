import { View, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeComponent from "./HomeComponent";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <Tab.Navigator initialRouteName={"home3"}>
      <Tab.Screen
        name='home'
        component={HomeComponent}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='home1'
        component={HomeComponent}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='home2'
        component={HomeComponent}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='콘텐츠'
        component={HomeComponent}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='home4'
        component={HomeComponent}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
