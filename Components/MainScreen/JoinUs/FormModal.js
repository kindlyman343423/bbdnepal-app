import React, { Component } from "react";
import { Modal, StyleSheet } from "react-native";

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
  DatePicker,
  Icon,
  Picker
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";

export default class FormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      genderSelect: "male",
      maritalStatusSelect: "married"
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate = newDate => {
    this.setState({ chosenDate: newDate });
  };

  onGenderValueChange = value => {
    this.setState({
      genderSelect: value
    });
  };

  onMaritalStatusValueChange = value => {
    this.setState({
      maritalStatusSelect: value
    });
  };

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modalVisible}
        onRequestClose={() => {
          this.props.setModalVisible(!this.props.modalVisible);
        }}
      >
        <Container style={{ alignContent: "center", justifyContent: "center" }}>
          <ScrollView>
            <Content>
              <Text style={styles.title}>Application Form</Text>
              <Form style={styles.form}>
                <Label style={styles.label}>First Name</Label>
                <Item rounded last style={styles.input}>
                  <Input />
                </Item>

                <Label style={styles.label}>Date of birth</Label>
                <Item rounded last style={styles.input}>
                  <DatePicker
                    defaultDate={new Date(2018, 4, 4)}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2018, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    textStyle={{ color: "black" }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    onDateChange={this.setDate}
                    disabled={false}
                  />
                </Item>

                <Label style={styles.label}>Citizenship Number</Label>
                <Item rounded last style={styles.input}>
                  <Input />
                </Item>

                <Label style={styles.label}>Occupation</Label>
                <Item rounded last style={styles.input}>
                  <Input />
                </Item>

                <Label style={styles.label}>Issued Date</Label>
                <Item rounded last style={styles.input}>
                  <DatePicker
                    defaultDate={new Date(2018, 4, 4)}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2018, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    textStyle={{ color: "black" }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    onDateChange={this.setDate}
                    disabled={false}
                  />
                </Item>

                <Label style={styles.label}>Issued By & District</Label>
                <Item rounded last style={styles.input}>
                  <Input />
                </Item>

                <Label style={styles.label}>Gender</Label>
                <Item rounded last style={styles.input}>
                  <Picker
                    mode="dropdown"
                    iosHeader="Gender"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.genderSelect}
                    onValueChange={this.onGenderValueChange}
                  >
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                    <Picker.Item label="Other" value="other" />
                  </Picker>
                </Item>

                <Label style={styles.label}>Marital Status</Label>
                <Item rounded last style={styles.input}>
                  <Picker
                    mode="dropdown"
                    iosHeader="Marital Status"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.maritalStatusSelect}
                    onValueChange={this.onMaritalStatusValueChange}
                  >
                    <Picker.Item label="Married" value="married" />
                    <Picker.Item label="Unarried" value="unmarried" />
                    <Picker.Item label="Other" value="other" />
                  </Picker>
                </Item>

                <Label style={styles.label}>Permanent Address</Label>

                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <Item rounded last style={[styles.input, styles.splitinput]}>
                    <Input placeholder={"    District"} />
                  </Item>
                  <Item rounded last style={[styles.input, styles.splitinput]}>
                    <Input placeholder={"    VDC/Municiplity"} />
                  </Item>
                </View>

                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Item rounded last style={[styles.input, styles.splitinput]}>
                    <Input placeholder={"    Ward No."} />
                  </Item>
                  <Item rounded last style={[styles.input, styles.splitinput]}>
                    <Input placeholder={"    Tole"} />
                  </Item>
                </View>

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
                    <Text style={{ color: "white" }}> Send Application </Text>
                  </Button>
                </View>
              </Form>
            </Content>
          </ScrollView>
        </Container>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "#122e8c",
    flex: 1,
    textAlignVertical: "center",
    textAlign: "center",
    marginTop: 10
  },
  contact: {
    flex: 1
  },
  form: {
    marginLeft: 10,
    marginRight: 10
  },
  input: {
    marginTop: 10,
    height: 40
  },
  splitinput: {
    flex: 1,
    width: 50
  },
  label: {
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 15
  }
});
