import React, { Component } from 'react'
import { Text, View } from 'react-native'

class OurServiceScreen extends Component {

  static navigationOptions = {
    drawerLabel: 'Our Services',
  };

  render() {
    return (
      <View>
        <Text> OurServiceScreen </Text>
      </View>
    )
  }
}

export default OurServiceScreen
