import React, { Component } from "react";
import {
  Container,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";
import { StatusBar, Platform, StyleSheet, View, Image } from "react-native";

import Header from "../shared/Head";
import Footer from "../shared/Foot";

import Slider from "./Slider";

export default class MainScreen extends Component {
  render() {
    return (
      <Container>
        <Header {...this.props} />
        <Content style={{ backgroundColor: "#d5d5d6" }}>
          <Slider />
          <Button block style={styles.button}>
            <Text>Join Us</Text>
          </Button>
        </Content>
        <Footer />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    height: null,
    width: null
  },
  button: {
    backgroundColor: "#00814e"
  },
  androidHeader: {
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight
      }
    })
  }
});
