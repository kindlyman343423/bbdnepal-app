import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { Text, Card, CardItem, Body, Icon, Content } from "native-base";

class OurPartners extends Component {
  render() {
    return (
      <Card>
        <CardItem header>
          <Text style={styles.title}>Our Partners</Text>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
 title: {
   fontSize: 20,
   color: "#122e8c"
 },
 heading: {
   fontSize: 15,
   fontWeight: "bold"
 },
});

export default OurPartners;
