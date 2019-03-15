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
import WelcomeSection from "./WelcomeSection";
import { ScrollView } from "react-native-gesture-handler";
import MembershipPlan from "./MembershipPlan";
import OurPartners from "../shared/SharedCard";
import JoinUs from "./JoinUs";

export default class MainScreen extends Component {

  state = {
    heading: "Our Partners",
    cards: [
      {
        title: "Ramhari Dhital",
        image: "https://facebook.github.io/react-native/docs/assets/favicon.png",
        desc: "Ramhari Dhital is known as a success man in finance industry in nepal. who protects his client’s interests as though they were his own."
      },
      {
        title: "Mrs. Tulsi Dhital",
        image: "https://i.kinja-img.com/gawker-media/image/upload/s--vSY-o42Q--/c_scale,f_auto,fl_progressive,q_80,w_800/ecq5rsk3n1nolujedskk.jpg",
        desc: "Mrs. Tulsi Dhital  is responsible for the day to day operations or an organization. She could be thought of as the second in command behind the Chairman or CEO."
      },
      {
        title: "Mr. Tej Bdr. Karki",
        image: "https://facebook.github.io/react-native/docs/assets/favicon.png",
        desc: "James M. Beck was a member of the Republican Party, who served as U.S. Solicitor General and U.S. Representative from Pennsylvania."
      },
    ]
  }

  render() {
    return (
     <Container>
        <Header {...this.props} />
        <ScrollView>
        <Content style={{ backgroundColor: "#d5d5d6" }}>
          <Slider />
          <JoinUs />
        <WelcomeSection />
        <MembershipPlan />
        <OurPartners heading={this.state.heading} cards={this.state.cards}/>
        </Content>
        </ScrollView>
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
