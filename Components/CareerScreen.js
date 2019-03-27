import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Container, Content} from 'native-base'
import Head from './shared/Head'

class CareerScreen extends Component {
  render() {
    return (
      <Container>
        <Head {...this.props}/>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20}}>No vacancies announced yet!</Text>
        </View>
      </Container>
    )
  }
}

export default CareerScreen
