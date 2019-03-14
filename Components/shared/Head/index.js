import React, { Component } from "react";
import { Header, Title, Button, Left, Right, Body, Icon, Root } from "native-base";
import { StatusBar, Platform, StyleSheet } from "react-native";
import ActionScreen from "./ActionScreen";

export default class Head extends Component {

  renderTitle = () =>{
    if (this.props.navigation.state.key === "Home"){
      return "BBD NEPAL"
    }else{
      return this.props.navigation.state.key
    }
  }


  render() {
    return (
      <Header
        style={[
          { backgroundColor: "#555555", height: 90 },
          styles.androidHeader
        ]}
      >
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.openDrawer()}
          >
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>{this.renderTitle()}</Title>
        </Body>

        <Right>
          <ActionScreen />
        </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  androidHeader: {
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight
      }
    })
  }
});
