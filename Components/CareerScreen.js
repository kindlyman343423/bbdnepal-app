import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Container} from 'native-base'
import Head from './shared/Head'

class CareerScreen extends Component {
  render() {
    return (
      <Container>
        <Head {...this.props}/>
      </Container>
    )
  }
}

export default CareerScreen
