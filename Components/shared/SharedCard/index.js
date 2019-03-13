import React, { Component } from "react";
import { Card, CardItem, Text, Container, Content } from "native-base";
import { StyleSheet, Image, Modal, TouchableNativeFeedback, View } from "react-native";
import ModalCard from "./ModalCard";

class SharedCard extends Component {

  state = {
    modalVisible: false,
  };

  setModalVisible =(visible) => {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <Card>
          <CardItem header>
            <Text style={styles.title}>{this.props.heading}</Text>
          </CardItem>


          {this.props.cards &&
            this.props.cards.map((member, i) => (
              <Content key={i}>
              <ModalCard modalVisible={this.state.modalVisible} setModalVisible={this.setModalVisible}/>
              <TouchableNativeFeedback onPress={() => this.setModalVisible(true)}>

                <CardItem cardBody>
                  <Image
                    source={{ uri: `${member.image}` }}
                    style={styles.image}
                    />
                </CardItem>
              </TouchableNativeFeedback>
                <CardItem>
                  <Text style={{ fontSize: 20 }}>{member.title}</Text>
                </CardItem>
                <CardItem>
                  <Text>{member.desc}</Text>
                </CardItem>
              </Content>
            ))}
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
  title: {
    fontSize: 20,
    color: "#122e8c"
  }
});

export default SharedCard;
