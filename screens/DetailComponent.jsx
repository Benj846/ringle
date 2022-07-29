import { View, Text } from "react-native";
const DetailComponent = ({ route, navigation }) => {
  const { title } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>DetailComponent</Text>
      <Text>{title}</Text>
    </View>
  );
};
export default DetailComponent;
