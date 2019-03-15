import React, { Component } from "react";
import { Text, View, Linking, Dimensions } from "react-native";
import { Button, Icon, ActionSheet, Root } from "native-base";

var BUTTONS = ["Facebook", "Twitter", "LinkedIn"];

import FAIcons from 'react-native-vector-icons/FontAwesome';


export default class ActionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: {
        text: ""
      }
    };
  }

  componentDidUpdate() {
    if (this.state.clicked) {
      if (this.state.clicked === "Facebook") {
        Linking.openURL("https://facebook.com");
      } else if (this.state.clicked === "Twitter") {
        Linking.openURL("https://twitter.com");
      } else if (this.state.clicked === "LinkedIn") {
        Linking.openURL("https://linkedin.com");
      }
    }
  }

  render() {
    return (
      <Root>
        <Button
          style={{ marginLeft: Dimensions.get("window").width / 4 + 15 }}
          transparent
          onPress={() =>
            ActionSheet.show(
              {
                options: BUTTONS,
                title: "Find Us On"
              },
              buttonIndex => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
              }
            )
          }
        >
          <FAIcons name="users" style={{color: "white", fontSize: 20}}/>
          {/* <Icon name="more" style={{ color: "white" }} /> */}
        </Button>
      </Root>
    );
  }
}
