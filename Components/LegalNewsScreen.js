import React, { Component } from 'react'
import { Text, View } from 'react-native'

class LegalNewsScreen extends Component {

  static navigationOptions = {
    drawerLabel: 'Legal News',
  };

  render() {
    return (
      <View>
        <Text> LegalNewsScreen </Text>
      </View>
    )
  }
}

export default LegalNewsScreen
