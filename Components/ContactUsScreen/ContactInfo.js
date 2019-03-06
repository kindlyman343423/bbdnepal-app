import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import {Container, Body} from 'native-base';

export default class ContactInfo extends Component {
  render() {
    return (
      <Body>
          <Text style={styles.title}> Contact Info </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{`\n`} Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
      </Body>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20
  }
});
