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

import {StyleSheet} from 'react-native';

export default class FormExample extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Container style={{ alignContent: "center", justifyContent: "center" }}>
          <Content>
           <Text style={styles.title}>Contact Us</Text>
            <Form>
              <Item floatingLabel>
                <Label>First Name*</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Last Name*</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Email*</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Phone Number*</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Subject</Label>
                <Input />
              </Item>
                <Textarea style={{marginTop: 20}} rowSpan={5} bordered placeholder="Message" />
              <View style={{ marginTop: 10, flex: 1, padding: 10 }}>
                <Button
                  block
                  style={{
                    width: "100%",
                    marginTop: 10,
                    justifyContent: "center",
                    backgroundColor: "#00814e"
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
   textAlignVertical: "center",textAlign: "center"
 },
 contact: {
  flex: 1
 }
});