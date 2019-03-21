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

import firebase from "firebase";

import Loading from "../shared/Loading";

import { StyleSheet, KeyboardAvoidingView } from "react-native";

const initialData = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  subject: "",
  message: ""
};

export default class FormExample extends Component {
  state = {
    data: initialData,
    loading: false
  };

  handleInputChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  handleSubmit = () => {
    this.setState({ loading: true });
    if (
      this.state.data.firstname !== "" ||
      this.state.data.lastname !== "" ||
      this.state.data.email !== "" ||
      this.state.data.phone !== ""
    ) {
      firebase
        .database()
        .ref("contacts")
        .push()
        .set(this.state.data)
        .then(() => {
          alert("Successfully sent");
          this.setState({ data: initialData, loading: false });
        })
        .catch(err => alert("Oops! There seems some error."));
    } else {
      alert("Fill the required inputs!");
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container style={{ alignContent: "center", justifyContent: "center" }}>
        <Content>
          <Text style={styles.title}>Contact Us</Text>
          <Form>
            <Label style={styles.label}>First Name*</Label>

            <Item rounded last style={styles.input}>
              <Input
                onChangeText={firstname =>
                  this.setState({
                    data: { ...this.state.data, firstname: firstname }
                  })
                }
                value={this.state.data.firstname}
              />
            </Item>

            <Label style={styles.label}>Last Name*</Label>
            <Item rounded last style={styles.input}>
              <Input
                onChangeText={lastname =>
                  this.setState({
                    data: { ...this.state.data, lastname: lastname }
                  })
                }
                value={this.state.data.lastname}
              />
            </Item>

            <Label style={styles.label}>Email*</Label>
            <Item rounded last style={styles.input}>
              <Input
                onChangeText={email =>
                  this.setState({ data: { ...this.state.data, email: email } })
                }
                value={this.state.data.email}
              />
            </Item>

            <Label style={styles.label}>Phone Number*</Label>
            <Item rounded last style={styles.input}>
              <Input
                onChangeText={phone =>
                  this.setState({ data: { ...this.state.data, phone: phone } })
                }
                value={this.state.data.phone}
              />
            </Item>

            <Label style={styles.label}>Subject</Label>
            <Item rounded last style={styles.input}>
              <Input
                onChangeText={subject =>
                  this.setState({
                    data: { ...this.state.data, subject: subject }
                  })
                }
                value={this.state.data.subject}
              />
            </Item>

            <Label style={styles.label}>Message</Label>
            <Item rounded last style={[styles.input, styles.textArea]}>
              <Input
                onChangeText={message =>
                  this.setState({
                    data: { ...this.state.data, message: message }
                  })
                }
                value={this.state.data.message}
              />
            </Item>

            <View style={{ marginTop: 10, flex: 1, padding: 10 }}>
              {!this.state.loading ? (
                <Button block style={styles.button} onPress={this.handleSubmit}>
                  <Text style={{ color: "white" }}> Send Message </Text>
                </Button>
              ) : (
                <Loading size={"large"} />
              )}
            </View>
          </Form>
        </Content>
      </Container>
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
  textArea: {
    height: 100
  },
  button: {
    width: "100%",
    marginTop: 10,
    justifyContent: "center",
    backgroundColor: "#00814e",
    borderRadius: 20
  }
});
