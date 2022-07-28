import {
  View,
  Text,
  Box,
  Button,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
        <Text style={{ fontSize: 18, marginBottom: 30 }}>카테고리별 웨비나</Text>
        <ScrollView>
          <TouchableWithoutFeedback
            style={{ width: "auto" }}
            onPress={() => {
              navigation.navigate("Detail");
            }}
          >
            <Text
              style={{
                borderWidth: 1,
                borderColor: "grey",
                borderRadius: 3,
                width: "auto",
                fontSize: 15,
              }}
            >
              링글러 Top Pick
            </Text>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Component;
