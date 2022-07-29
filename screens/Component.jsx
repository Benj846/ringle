import { View, Text, ScrollView, Dimensions, TouchableOpacity } from "react-native";

import CarouselComponent from "./CarouselComponent";

const Component = ({ navigation }) => {
  const screenWidth = Dimensions.get("window").width;
  return (
    <ScrollView style={{ flex: 1, height: 1000 }}>
      <CarouselComponent />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          width: screenWidth,
          paddingHorizontal: 35,
          marginTop: 30,
        }}
      >
        <Text style={{ fontSize: 18, marginBottom: 10 }}>카테고리별 웨비나</Text>
        <ScrollView horizontal style={{ height: 50, flexWrap: "wrap", width: 200 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              width: 120,
              height: 30,
              borderRadius: 5,
              borderColor: "grey",
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              navigation.navigate("링글러 Top Pick", { title: "#Popular" });
            }}
          >
            <Text style={{ color: "grey", fontSize: 15 }}>링글러 Top Pick</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Component;
