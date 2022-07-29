import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
import { useEffect, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { AntDesign } from "@expo/vector-icons";

import { dataState } from "../recoil";

const DetailComponent = ({ route, navigation }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { title } = route.params;
  const screenWidth = Dimensions.get("window").width;
  const [apiData, setapiData] = useRecoilState(dataState);

  const renderItem = ({ item }) => {
    const { id, name, subName, tagName, isLiked, title, imgUrl } = item;
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          height: 150,
          borderRadius: 10,
          borderColor: "grey",
          borderWidth: 0.2,
          flexDirection: "row",
          marginVertical: 10,
        }}
        onPress={() => {
          // console.log(item);
        }}
      >
        <Image
          source={{
            uri: imgUrl,
          }}
          style={{
            width: 170,
            height: 149,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        />
        <View
          style={{ flexDirection: "col", justifyContent: "space-between", paddingHorizontal: 10 }}
        >
          {/* VStack */}
          <View style={{ flexDirection: "col" }}>
            {/* HStack */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginTop: 10,
              }}
            >
              <Text style={{ color: "grey", fontSize: 12 }}>#Ringle LIVE</Text>
              {isLiked ? (
                <TouchableOpacity
                // onPress={() => {
                //   const temData = apiData;
                //   temData[isLiked] = !isLiked;
                //   setapiData(temData);
                // }}
                >
                  <AntDesign name='heart' size={10} color='black' />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                // onPress={() => {
                //   const temData = apiData;
                //   temData[isLiked] = !isLiked;
                //   setapiData(temData);
                // }}
                >
                  <AntDesign name='hearto' size={10} color='black' />
                </TouchableOpacity>
              )}
            </View>
            <Text style={{ color: "black", fontSize: 15, marginTop: 10 }}>
              함께 읽어요, H카트에서 울다
            </Text>
          </View>
          {/* HStack */}
          <View style={{ flexDirection: "row" }}>
            <Image
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=male",
              }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
              }}
            />
            {/* VStack */}
            <View style={{ flexDirection: "col", marginBottom: 20 }}>
              <Text
                style={{
                  color: "grey",
                  fontSize: 12,
                  marginLeft: 20,
                  marginVertical: 3,
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                Joseph
              </Text>
              <Text
                style={{
                  color: "grey",
                  fontSize: 12,
                  // marginTop: 10,
                  marginLeft: 20,
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                University of To
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        marginTop: 30,
      }}
    >
      <TouchableOpacity
        style={{
          marginLeft: 10,
          backgroundColor: "rgba(122, 93, 232, 0.2)",
          width: 90,
          height: 30,
          borderRadius: 15,
          borderColor: "#7a5de8",
          borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#7a5de8", fontSize: 15 }}>{title}</Text>
      </TouchableOpacity>
      <FlatList
        data={apiData}
        renderItem={renderItem}
        style={{ marginTop: 30, paddingHorizontal: 10, width: screenWidth }}
      ></FlatList>
    </View>
  );
};
export default DetailComponent;
