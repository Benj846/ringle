import { View, Text, Box, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CarouselComponent from "./CarouselComponent";

const Component = () => {
  return (
    <ScrollView style={{ flex: 1, height: 1000 }}>
      <CarouselComponent />
      <Text>sdkfj</Text>
    </ScrollView>
  );
};

export default Component;
