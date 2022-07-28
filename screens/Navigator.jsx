import { View, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeComponent from "./HomeComponent";
import Home from "./Home";
import OneOnOne from "./OneOnOne";
import LearnActivity from "./LearnActivity";
import Tutor from "./Tutor";
import DetailComponent from "./DetailComponent";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNav = () => {
  return (
    <Tab.Navigator initialRouteName={"콘텐츠"}>
      <Tab.Screen
        name='home'
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='1:1 수업'
        component={OneOnOne}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='튜터'
        component={Tutor}
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
        name='학습 활동'
        component={LearnActivity}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='homeNav' component={HomeNav} />
        <Stack.Screen name='Detail' component={DetailComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
