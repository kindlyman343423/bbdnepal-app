import React, { Component } from "react";
import { Container, Content } from "native-base";
import Head from "../shared/Head";
import LegalCard from "./SharedCard";
import { ScrollView } from "react-native-gesture-handler";
import Axios from "axios";
import { RefreshControl } from "react-native";
import Loading from "../shared/Loading";

class LegalNewsScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Legal News"
  };

  state = {
    heading: "Legal News",
    data: [],
    refreshing: false,
    loading: true
  };

  componentDidMount() {
    this.callAPI();
  }

  callAPI = () => {
    Axios.get("http://bbdnepal.com/wp-json/wp/v2/posts").then(resp => {
      this.setState({ data: resp.data, loading: false });
    });
  };

  onRefresh = () => {
    this.setState({ data: [], loading: true });
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
            {this.state.loading ? (<Loading size="large"/>) : (<LegalCard
              heading={this.state.heading}
              cards={this.state.cards}
              data={this.state.data}
            />)}
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

export default LegalNewsScreen;
