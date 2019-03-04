import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Card,
  CardItem
} from "native-base";
import { StatusBar, Platform, StyleSheet, View, Image } from "react-native";

import Swiper from "react-native-swiper";

export default class MainScreen extends Component {
  render() {
    return (
      <Container>
        <Header
          style={[
            { backgroundColor: "#555555", height: 90 },
            styles.androidHeader
          ]}
        >
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>BBD NEPAL</Title>
          </Body>
          <Right />
        </Header>
        <Content style={{ backgroundColor: "#d5d5d6" }}>
          <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
            <View style={styles.slide1}>
              <Image
                style={styles.image}
                source={require("../assets/images/slider_1.png")}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Image
                style={styles.image}
                source={require("../assets/images/slider_2.jpg")}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Image
                style={styles.image}
                source={require("../assets/images/slider_3.jpg")}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Image
                style={styles.image}
                source={require("../assets/images/slider_4.jpg")}
              />
            </View>
          </Swiper>
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: "#555555" }}>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
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
  wrapper: {
    height: 200
  },
  slide1: {
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    height: null,
    width: null
  },
  androidHeader: {
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight
      }
    })
  }
});
