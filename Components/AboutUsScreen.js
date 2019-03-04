import React, { Component } from 'react'
import { Text, View } from 'react-native'

class AboutUsScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'About Us',
  };

  render() {
    return (
      <View>
        <Text> AboutUsScreen </Text>
      </View>
    )
  }
}

export default AboutUsScreen
