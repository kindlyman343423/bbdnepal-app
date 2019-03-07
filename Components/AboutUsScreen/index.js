import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Container, Card, CardItem, Content } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

import Head from "../shared/Head";

import BulletPoints from "./BulletPoints";
import Members from "./Members";

class AboutUsScreen extends Component {
  static navigationOptions = {
    drawerLabel: "About Us"
  };

  render() {
    return (
      <Container>
        <Head {...this.props} />
        <ScrollView>
          <Content>
            <BulletPoints />
              <Members />
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "#122e8c"
  }
});

export default AboutUsScreen;
