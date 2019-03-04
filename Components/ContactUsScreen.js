import React, { Component } from 'react'
import { Text, View } from 'react-native'

class ContactUsScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Contact Us',
  };

  render() {
    return (
      <View>
        <Text> ContactUsScreen </Text>
      </View>
    )
  }
}

export default ContactUsScreen
