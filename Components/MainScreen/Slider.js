import React, {Component} from "react";
import { View, Image, StyleSheet } from "react-native";

import Swiper from "react-native-swiper";

class Slider extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
        <View style={styles.slide1}>
          <Image
            style={styles.image}
            source={require("../../assets/images/slider_1.png")}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Image
            style={styles.image}
            source={require("../../assets/images/slider_2.jpg")}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Image
            style={styles.image}
            source={require("../../assets/images/slider_3.jpg")}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Image
            style={styles.image}
            source={require("../../assets/images/slider_4.jpg")}
          />
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  wrapper: {
    height: 200
  },
  slide1: {
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    height: null,
    width: null
  },
})

export default Slider;