import React, { Component } from "react";
import { Card, CardItem, Text, Container, Content } from "native-base";
import {StyleSheet, Image} from 'react-native';

class Members extends Component {
  render() {
    return (
      <Card>
        <CardItem header>
          <Text>Our members</Text>
        </CardItem>
        <Content>
        <CardItem cardBody>
          <Image
            source={require("../../assets/images/member1.jpg")}
            style={styles.image}
          />
        </CardItem>
        <CardItem>
        <Text style={{fontSize: 15}}>Ramhari Dhital</Text>
        </CardItem>
        <CardItem>
          <Text>Ramhari Dhital is known as a success man in finance industry in nepal. who protects his client’s interests as though they were his own.</Text>
        </CardItem>
        </Content>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    height: 200,
    width: 200
  },
})

export default Members;
