import React, { Component } from "react";
import { Container, Content } from "native-base";
import Head from "../shared/Head";
import LegalCard from "./SharedCard";
import { ScrollView } from "react-native-gesture-handler";
import Axios from "axios";
import { RefreshControl } from "react-native";

class LegalNewsScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Legal News"
  };

  state = {
    heading: "Legal News",
    cards: [
      {
        title: "Ramhari Dhital",
        image: "https://i.ibb.co/WgR4yJH/member1.jpg",
        desc:
          "Ramhari Dhital is known as a success man in finance industry in nepal. who protects his client’s interests as though they were his own."
      },
      {
        title: "Mrs. Tulsi Dhital",
        image: "https://i.ibb.co/Q6v3tDF/member2.jpg",
        desc:
          "Mrs. Tulsi Dhital  is responsible for the day to day operations or an organization. She could be thought of as the second in command behind the Chairman or CEO."
      },
      {
        title: "Mr. Tej Bdr. Karki",
        image: "https://i.ibb.co/vJhCQpH/member3.png",
        desc:
          "James M. Beck was a member of the Republican Party, who served as U.S. Solicitor General and U.S. Representative from Pennsylvania."
      }
    ],
    data: [],
    refreshing: false
  };

  componentDidMount() {
    this.callAPI();
  }

  callAPI = () => {
    Axios.get("http://bbdnepal.com/wp-json/wp/v2/posts").then(resp => {
      this.setState({ data: resp.data });
    });
  };

  onRefresh = () => {
    this.setState({ data: [] });
    setTimeout(() => {
      this.callAPI();
    }, 1000);
  };

  render() {
    console.log(this.state);
    return (
      <Container>
        <Head {...this.props} />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
        >
          <Content>
            <LegalCard
              heading={this.state.heading}
              cards={this.state.cards}
              data={this.state.data}
            />
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

export default LegalNewsScreen;
