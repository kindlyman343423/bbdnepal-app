import React, { Component } from "react";
import {View, StyleSheet } from "react-native";
import { Container, Content, Form, Item, Input, Button, Text } from "native-base";

class NewsLetter extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Form>
            <Item rounded last style={styles.input}>
              <Input />
            </Item>
            <Button block style={styles.button}>
                  <Text style={{ color: "white" }}>SUBSCRIBE </Text>
                </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
 container: {
   flex: 1
 },
  input: {
    flexBasis: 20,
    marginTop: 10,
    height: 40,
    width: "60%",
    margin: 10
  },
  button: {
   width: "35%",
   marginTop: 10,
   justifyContent: "center",
   backgroundColor: "#00814e",
   borderRadius: 20
 },
 content: {
  flexDirection: 'row',
  alignItems: 'flex-start'
 },
});

export default NewsLetter;
