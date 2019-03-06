import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Container, Card, CardItem, Content } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

import Head from "../shared/Head";
import GoogleMap from "./GoogleMap";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

class ContactUsScreen extends Component {
  
  static navigationOptions = {
    drawerLabel: "Contact Us"
  };

  render() {
    return (
      <Container>
        <ScrollView>
          <Head {...this.props} />
          <Content>
            <Card>
              <CardItem>
            <GoogleMap />
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <ContactInfo />
              </CardItem>
            </Card>
            <Card>
              <CardItem style={{flex: 1}}>
                <ContactForm flexContact={styles.contact}/>
              </CardItem>
            </Card>
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "#122e8c",
    flex: 1,
    textAlignVertical: "center",textAlign: "center"
  },
  contact: {
   flex: 1
  }
});

export default ContactUsScreen;
