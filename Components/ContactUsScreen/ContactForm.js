import React, { Component } from "react";
import {
  Form,
  Item,
  Input,
  Content,
  Label,
  Text,
  Button,
  View,
  Container,
  Textarea
} from "native-base";

import { StyleSheet } from "react-native";

export default class FormExample extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Container style={{ alignContent: "center", justifyContent: "center" }}>
          <Content>
            <Text style={styles.title}>Contact Us</Text>
            <Form>
              <Label style={styles.label}>First Name*</Label>
              <Item rounded last style={styles.input}>
                <Input />
              </Item>
              
              <Label style={styles.label}>Last Name*</Label>
              <Item rounded last style={styles.input}>
                <Input />
              </Item>
              
              <Label style={styles.label}>Email*</Label>
              <Item rounded last style={styles.input}>
                <Input />
              </Item>
              
              <Label style={styles.label}>Phone Number*</Label>
              <Item rounded last style={styles.input}>
                <Input />
              </Item>
              
              <Label style={styles.label}>Subject</Label>
              <Item rounded last style={styles.input}>
                <Input />
              </Item>

              <Label style={styles.label}>Message</Label>
              <Item rounded last style={[styles.input, styles.textArea]}>
               <Input />
              </Item>
              
              
                <View style={{ marginTop: 10, flex: 1, padding: 10 }}>
                  <Button
                    block
                    style={{
                      width: "100%",
                      marginTop: 10,
                      justifyContent: "center",
                      backgroundColor: "#00814e",
                      borderRadius: 20
                    }}
                  >
                    <Text style={{ color: "white" }}> Send Message </Text>
                  </Button>
                </View>
            </Form>
          </Content>
        </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "#122e8c",
    flex: 1,
    textAlignVertical: "center",
    textAlign: "center"
  },
  label: {
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 15
  },
  contact: {
    flex: 1
  },
  input: {
    marginTop: 10,
    height: 40
  },
  textArea:{
    height: 100
  }
});
