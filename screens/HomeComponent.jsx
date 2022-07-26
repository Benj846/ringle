import { View, Text, Box, SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Component from "./Component";
const TopTab = createMaterialTopTabNavigator();

const HomeComponent = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopTab.Navigator
        initialRouteName='tophome'
        screenOptions={{
          //   tabBarActiveTintColor: "#e91e63",
          tabBarLabelStyle: { fontSize: 12 },
          //   tabBarItemStyle: { width: 300 },
          //   tabBarStyle: { backgroundColor: "powderblue" },
        }}
      >
        <TopTab.Screen
          name='tophome'
          component={Component}
          options={{
            tabBarLabel: "웨비나",
          }}
        />
        <TopTab.Screen
          name='tophome1'
          component={Component}
          options={{
            tabBarLabel: "교재",
          }}
        />
        <TopTab.Screen
          name='tophome2'
          component={Component}
          options={{
            tabBarLabel: "데일리 브리프",
          }}
        />
        <TopTab.Screen
          name='tophome3'
          component={Component}
          options={{
            tabBarLabel: "내 콘텐츠",
          }}
        />
      </TopTab.Navigator>
    </SafeAreaView>
  );
};
export default HomeComponent;
