import React, { Component } from 'react'
import { Container, Content, Accordion } from "native-base";
import Head from "../shared/Head";
import NewsLetter from './NewsLetter';
import {StyleSheet} from 'react-native';

const dataArray = [
  { title: "Serivice 1", content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae omnis facilis consectetur doloremque deserunt alias iure soluta hic accusamus, ea sequi reprehenderit beatae aspernatur ut debitis cum necessitatibus neque ducimus." },
  { title: "Service 2", content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae omnis facilis consectetur doloremque deserunt alias iure soluta hic accusamus, ea sequi reprehenderit beatae aspernatur ut debitis cum necessitatibus neque ducimus."  },
  { title: "Serivice 3", content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae omnis facilis consectetur doloremque deserunt alias iure soluta hic accusamus, ea sequi reprehenderit beatae aspernatur ut debitis cum necessitatibus neque ducimus." },
  { title: "Service 4", content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae omnis facilis consectetur doloremque deserunt alias iure soluta hic accusamus, ea sequi reprehenderit beatae aspernatur ut debitis cum necessitatibus neque ducimus."  },
];

class OurServiceScreen extends Component {

  static navigationOptions = {
    drawerLabel: 'Our Services',
  };

  render() {
    return (
     <>
      <Container style={styles.container}>
        <Head {...this.props}/>
        <Content padder>
        <Accordion dataArray={dataArray} icon="ios-add" expandedIcon="ios-remove" expanded={true} animation={true}/>
      </Content>
      </Container>
      <NewsLetter />
      </>
    )
  }
}

const styles = StyleSheet.create({
 container:{
  flex: 4
 }
})


export default OurServiceScreen
