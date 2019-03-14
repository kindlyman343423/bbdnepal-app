import React, { Component } from "react";
import { Text, View, Modal, TouchableNativeFeedback, Image, StyleSheet } from "react-native";
import { Card, CardItem, Container, Content, Button } from "native-base";


export default class ModalCard extends Component {
  render() {
   console.log(this.props)
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modalVisible}
        onRequestClose={() => {
         this.props.setModalVisible(!this.props.modalVisible, 0)
        }}
      >
          <Content>
              <CardItem cardBody>
                <Image
                  source={{ uri: `${this.props.member.image}` }}
                  style={styles.image}
                />
              </CardItem>
            <CardItem>
              <Text style={{ fontSize: 20 }}>{this.props.member.title}</Text>
            </CardItem>
            <CardItem>
              <Text>{this.props.member.desc}</Text>
            </CardItem>
          </Content>
      </Modal>
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
 title: {
   fontSize: 20,
   color: "#122e8c"
 },
 button:{
  color: 'red'
 }
});
