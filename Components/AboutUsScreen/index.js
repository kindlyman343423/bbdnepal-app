import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Container, Card, CardItem, Content } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

import Head from "../shared/Head";

import BulletPoints from "./BulletPoints";
import Members from "../shared/SharedCard";

class AboutUsScreen extends Component {

  state = {
    heading: "Our members",
    cards: [
      {
        title: "Ramhari Dhital",
        image: "https://i.ibb.co/WgR4yJH/member1.jpg",
        desc: "Ramhari Dhital is known as a success man in finance industry in nepal. who protects his client’s interests as though they were his own."
      },
      {
        title: "Mrs. Tulsi Dhital",
        image: "https://i.ibb.co/Q6v3tDF/member2.jpg",
        desc: "Mrs. Tulsi Dhital  is responsible for the day to day operations or an organization. She could be thought of as the second in command behind the Chairman or CEO."
      },
      {
        title: "Mr. Tej Bdr. Karki",
        image: "https://i.ibb.co/vJhCQpH/member3.png",
        desc: "James M. Beck was a member of the Republican Party, who served as U.S. Solicitor General and U.S. Representative from Pennsylvania."
      },
    ]
  }

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
              <Members heading={this.state.heading} cards={this.state.cards}/>
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
