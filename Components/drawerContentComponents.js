import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { Text, View, StyleSheet, ImageBackground, TouchableNativeFeedback } from "react-native";
import { ListItem, Left, Content } from "native-base";

export default class drawerContentComponents extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {

   const {activeItemKey} = this.props;

    return (
      <Content>
        <View style={styles.headerContainer}>
          <ImageBackground
            source={require("../assets/images/slider_2.jpg")}
            style={{ flex: 1, width: 280, justifyContent: "center" }}
          />
        </View>
        <View style={styles.screenContainer}>

          <ListItem onPress={this.navigateToScreen("Home")}>
           <Left>
           <View style={styles.screenStyle} >
              {
               activeItemKey === "Home" ? (
                <Text style={{fontWeight: "bold"}}>Home</Text>
               ): (
                <Text>Home</Text>
               )
              }
            </View>
           </Left>
           </ListItem>

           <ListItem onPress={this.navigateToScreen("AboutUs")}>
           <Left>
            <View style={styles.screenStyle}>
            {
               activeItemKey === "AboutUs" ? (
                <Text style={{fontWeight: "bold"}}>About Us</Text>
               ): (
                <Text>About Us</Text>
               )
              }
            </View>
            </Left>
            </ListItem>
            
           <ListItem onPress={this.navigateToScreen("OurService")}>
           <Left>
            <View style={styles.screenStyle}>
            {
               activeItemKey === "OurService" ? (
                <Text style={{fontWeight: "bold"}}>Our Service</Text>
               ): (
                <Text>Our Service</Text>
               )
              }
            </View>
            </Left>
            </ListItem>

           <ListItem onPress={this.navigateToScreen("LegalNews")}>
           <Left>
            <View style={styles.screenStyle}>
            {
               activeItemKey === "LegalNews" ? (
                <Text style={{fontWeight: "bold"}}>Legal News</Text>
               ): (
                <Text>Legal News</Text>
               )
              }
            </View>
            </Left>
            </ListItem>

           <ListItem onPress={this.navigateToScreen("Career")}>
           <Left>
            <View style={styles.screenStyle}>
            {
               activeItemKey === "Career" ? (
                <Text style={{fontWeight: "bold"}}>Career</Text>
               ): (
                <Text>Career</Text>
               )
              }
            </View>
            </Left>
            </ListItem>

           <ListItem onPress={this.navigateToScreen("FAQ")}>
           <Left>
            <View style={styles.screenStyle}>
            {
               activeItemKey === "FAQ" ? (
                <Text style={{fontWeight: "bold"}}>FAQ</Text>
               ): (
                <Text>FAQ</Text>
               )
              }
            </View>
            </Left>
            </ListItem>
            
           <ListItem onPress={this.navigateToScreen("ContactUs")}>
           <Left>
            <View style={styles.screenStyle}>
            {
               activeItemKey === "ContactUs" ? (
                <Text style={{fontWeight: "bold"}}>ContactUs</Text>
               ): (
                <Text>ContactUs</Text>
               )
              }
            </View>
            </Left>
            </ListItem>
        </View>
      </Content>
    );
  }
}

// Home: MainScreen,
// AboutUs: AboutUsScreen,
// CareerScreen: OurServiceScreen,
// LegalNews: LegalNewsScreen,
// Career: CareerScreen,
// FAQ: FAQScreen,
// ContactUs: ContactUsScreen,

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start"
  },
  headerContainer: {
    height: 150
  },
  headerText: {
    color: "#fff8f8"
  },
  screenContainer: {
    paddingTop: 20
  },
  screenStyle: {
    height: 30,
    marginTop: 2,
    flexDirection: "row",
    alignItems: "flex-start"
  },
  screenTextStyle: {
    fontSize: 20,
    marginLeft: 10
  }
});
