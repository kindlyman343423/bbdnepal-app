import React, { Component } from 'react'
import Head from './shared/Head';
import { Container, Header, Content, Accordion } from "native-base";
const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

class FAQScreen extends Component {
  render() {
    return (
      <Container>
      <Head {...this.props}/>
      <Content padder>
        <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" expanded={true}/>
      </Content>
    </Container>
    )
  }
}

export default FAQScreen;