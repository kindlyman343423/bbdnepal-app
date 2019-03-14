import React, { Component } from "react";
import { Text, View, Linking, Dimensions } from "react-native";
import { Button, Icon, ActionSheet, Root } from "native-base";

var BUTTONS = [
  { text: "Facebook", iconColor: "#2c8ef4" },
  { text: "Twitter", iconColor: "#f42ced" },
  { text: "LinkedIn", iconColor: "#ea943b" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

export default class ActionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: {
        text: ""
      }
    };
  }

  componentDidUpdate(){
    if(this.state.clicked){
      if(this.state.clicked.text === "Facebook"){
        Linking.openURL('https://facebook.com')
      }
      else if(this.state.clicked.text === "Twitter"){
        Linking.openURL('https://twitter.com')
      }
      else if(this.state.clicked.text === "LinkedIn"){
        Linking.openURL('https://linkedin.com')
      }
    }
  }

  
  render() {
    return (
      <Root>
        <Button
         style={{marginLeft: Dimensions.get('window').width/4 + 15}}
          transparent
          onPress={() =>
            ActionSheet.show(
              {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Find Us On"
              },
              buttonIndex => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
              }
            )
          }
        >
          <Icon name="more" style={{color: 'white'}}/>
        </Button>
      </Root>
    );
  }
}
