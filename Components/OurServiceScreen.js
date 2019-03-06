import React, { Component } from 'react'
import { Container } from "native-base";
import Head from "./shared/Head";

class OurServiceScreen extends Component {

  static navigationOptions = {
    drawerLabel: 'Our Services',
  };

  render() {
    return (
      <Container>
        <Head {...this.props}/>
      </Container>
    )
  }
}

export default OurServiceScreen
