import React, { Component } from "react";
import { Text, Card, CardItem, Body } from "native-base";
import { View, StyleSheet } from "react-native";

class WelcomeSection extends Component {
  render() {
    return (
      <Card>
        <CardItem header>
          <Text style={styles.title}> Welcome </Text>
        </CardItem>
        <CardItem>
        <Body>
            <Text style={styles.heading}>Welcome to BBD International</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              BBD International Pvt. Ltd. is a modified name of a private
              company which was registered in 2065 BS according to company law
              2063 B.S. It is a unique and successful company that has been
              doing different kind of work and providing different kind of
              facilities. Various types of business are being operated under
              this company. Few of them are co-operatives, Real state, Mart,
              Consultancy and other small and large business.
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "#122e8c",
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default WelcomeSection;
