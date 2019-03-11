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
import OurPartners from "../AboutUsScreen/Members";

state = {
  heading: "Our partners",
  cards: [
    {
      title: "Ramhari Dhital",
      image: "../../assets/images/member1.jpg",
      desc: "Ramhari Dhital is known as a success man in finance industry in nepal. who protects his client’s interests as though they were his own."
    },
    {
      title: "Mrs. Tulsi Dhital",
      image: "../../assets/images/member2.jpg",
      desc: "Mrs. Tulsi Dhital  is responsible for the day to day operations or an organization. She could be thought of as the second in command behind the Chairman or CEO."
    },
    {
      title: "Mr. Tej Bdr. Karki",
      image: "../../assets/images/member3.jpg",
      desc: "James M. Beck was a member of the Republican Party, who served as U.S. Solicitor General and U.S. Representative from Pennsylvania."
    },
  ]
}

export default class MainScreen extends Component {

  state = {
    heading: "Our Partners"
  }

  render() {
    return (
     <Container>
        <Header {...this.props} />
        <ScrollView>
        <Content style={{ backgroundColor: "#d5d5d6" }}>
          <Slider />
          <Button block style={styles.button}>
            <Text>Join Us</Text>
          </Button>
        <WelcomeSection />
        <MembershipPlan />
        <OurPartners heading={this.state.heading} card={this.state.cards}/>
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
