import React, { Component } from "react";
import { Card, CardItem, Text, Container, Content } from "native-base";
import {
  StyleSheet,
  Image,
  Modal,
  TouchableNativeFeedback,
  TouchableHighlight,
  View,
  Platform
} from "react-native";
import ModalCard from "./ModalCard";

class SharedCard extends Component {
  state = {
    modalVisible: false,
    currentmember: 0
  };

  setModalVisible = (visible, i) => {
    console.log(i);
    this.setState({ modalVisible: visible });
    this.setState({ currentmember: i });
  };

  render() {
    return (
      <Card>
        <CardItem header>
          <Text style={styles.title}>{this.props.heading}</Text>
        </CardItem>

        <ModalCard
          modalVisible={this.state.modalVisible}
          setModalVisible={this.setModalVisible}
          member={this.props.cards[this.state.currentmember]}
        />

        {this.props.cards &&
          this.props.cards.map((member, i) => (
            <Content key={i}>
              {Platform.OS === "ios" ? (
                <TouchableHighlight
                  onPress={() => this.setModalVisible(true, i)}
                >
                  <CardItem cardBody>
                    <Image
                      source={{ uri: `${member.image}` }}
                      style={styles.image}
                    />
                  </CardItem>
                </TouchableHighlight>
              ) : (
                <TouchableNativeFeedback
                  onPress={() => this.setModalVisible(true, i)}
                >
                  <CardItem cardBody>
                    <Image
                      source={{ uri: `${member.image}` }}
                      style={styles.image}
                    />
                  </CardItem>
                </TouchableNativeFeedback>
              )}
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
