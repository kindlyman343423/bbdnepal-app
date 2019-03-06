import React, { Component } from 'react'
import {Container} from 'native-base'
import Head from './shared/Head'

class FAQScreen extends Component {
  render() {
    return (
      <Container>
        <Head {...this.props}/>
      </Container>
    )
  }
}

export default FAQScreen
