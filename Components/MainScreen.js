import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";
import {StatusBar, Platform, StyleSheet} from 'react-native';

export default class MainScreen extends Component {
  render() {
    return (
        <Container>
          <Header style={[{backgroundColor: "#555555", height: 90}, styles.androidHeader]}>
            <Left>
              <Button transparent onPress={()=>this.props.navigation.openDrawer()}>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>BBD NEPAL</Title>
            </Body>
            <Right />
          </Header>
          <Content style={{backgroundColor: "#d5d5d6"}}>
            <Text>This is Content Section</Text>
          </Content>
          <Footer>
            <FooterTab style={{backgroundColor: "#555555"}}>
              <Button full>
                <Text>Footer</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  androidHeader: {
    ...Platform.select({
      android:{
        paddingTop: StatusBar.currentHeight
      }
    })
  }
})