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
          <Head {...this.props} />
        <ScrollView>
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
              <CardItem >
                <ContactForm />
              </CardItem>
            </Card>
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

});

export default ContactUsScreen;
