import React, { Component } from "react";
import { Container } from "native-base";
import Head from "./shared/Head";

class LegalNewsScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Legal News"
  };

  render() {
    return (
      <Container>
        <Head {...this.props} />
      </Container>
    );
  }
}

export default LegalNewsScreen;
