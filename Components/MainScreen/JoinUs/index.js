import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import { Button, Text } from "native-base";

import FormModal from './FormModal';

class JoinUs extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible = (visible, i) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    return (
      <React.Fragment>
       <FormModal modalVisible={this.state.modalVisible} setModalVisible={this.setModalVisible}/>
        <Button block style={styles.button} onPress={()=> this.setModalVisible(true)}>
          <Text>Join Us</Text>
        </Button>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#00814e"
  }
});

export default JoinUs;
