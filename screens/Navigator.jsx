import { View, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import BottomNav from "./BottomNav";
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
        component={BottomNav}
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
        <Stack.Screen
          name='homeNav'
          component={HomeNav}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='링글러 Top Pick'
          component={DetailComponent}
          options={{
            // headerShown: false,
            headerLeft: () => <Ionicons name='md-chevron-back-outline' size={24} color='black' />,
            headerRight: () => <AntDesign name='search1' size={24} color='black' />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
