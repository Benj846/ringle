import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from "react-native";
import PagerView from "react-native-pager-view";
import Slider from "@react-native-community/slider";

const CarouselComponent = () => {
  return (
    <PagerView style={styles.viewPager} initialPage={0} showPageIndicator={true}>
      <View style={styles.page} key='1'>
        <Text style={styles.page}>UPCOMING LIVE 🔴</Text>
        <Text
          style={{ fontSize: 20, fontWeight: "bold", color: "white", width: 280, marginTop: 20 }}
        >
          초보 하객러를 위한 결혼식장 에티켓 & 알아두면 좋은 표현{" "}
        </Text>
        <Text style={{ fontSize: 12, color: "white", width: 280, marginTop: 20 }}>
          7월24일(일) 저녁 21:00(Asia/Seoul)
        </Text>
        <View
          style={{
            flexDirection: "row",
            height: 50,
            marginTop: 20,
            width: 280,
          }}
        >
          <Image
            source={require("../assets/cont_list3.png")}
            style={{ height: 50, width: 50, borderRadius: 50 }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "col",
              marginLeft: 15,
              height: 50,
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 12, color: "white" }}>Joseph</Text>
            <Text style={{ fontSize: 12, color: "white", marginTop: 6 }}>
              University of Toronto
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 20, width: 280 }}>
          <Text style={{ fontSize: 12, color: "white" }}>현재 신청 351 명</Text>
          <Slider
            style={{ width: 280, height: 15 }}
            minimumValue={0}
            maximumValue={400}
            value={351}
            minimumTrackTintColor='white'
            maximumTrackTintColor='grey'
            thumbTintColor='transparent'
            disabled={true}
          />
          <Text style={{ fontSize: 12, color: "white" }}>전체 정원 400 명</Text>
        </View>
        <View style={{ width: 280, marginTop: 20 }}>
          <TouchableOpacity
            style={{
              width: 180,
              height: 45,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
            onPress={() => {
              console.log("first");
            }}
          >
            <Text style={{ fontSize: 15, color: "black" }}>자세히 보기</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.page} key='2'>
        <Text>Second page</Text>
      </View>
      <View style={styles.page} key='3'>
        <Text>Third page</Text>
      </View>
    </PagerView>
  );
};

export default CarouselComponent;

const styles = StyleSheet.create({
  viewPager: {
    backgroundColor: "black",
    height: 400,
  },
  page: {
    marginTop: 15,
    width: 280,
    fontSize: 12,
    alignItems: "center",
    color: "white",
  },
});
