import React, { Component } from 'react'
import Head from './shared/Head';
import { Container, Header, Content, Accordion } from "native-base";
const dataArray = [
  { title: "Who We Are", content: "BBD International Pvt. Ltd. is a modified name of a private company which was registered in 2065 BS according to company law 2063 B.S. It is a unique and successful company that has been doing different kind of work and providing different kind of facilities. Various types of business are being operated under this company. Few of them are co-operatives, Real state, Mart, Consultancy and other large of small business." },
  { title: "What We Do", content: " Provide variety of services: \n \n \u2022 To provide facilities and discount. \n \n \u2022 To provide facilities and discount. \n \n \u2022 To provide online service. \n \n \u2022 To provide SMS Service. \n \n \u2022 To make life comfortable. \n \n \u2022 To change lifestyle by providing training and counseling. \n \n \u2022 To help you to expand your business and make it well managed. \n \n \u2022 To organized entertainment based cultural programs, picnics, event managements etc.\n \n \u2022 To collaborate with different companies and provide their services and discount.\n \n \u2022 If such situations arise when there are chances of loss in your business, we help you out by making new agreements.\n \n \u2022 To make new plans for different types of business.\n \n \u2022 To help nations to be different prosperous. \n \n \u2022 All other information related to our company can be obtained from our websites and with the help of our agents." },
];

class FAQScreen extends Component {
  render() {
    return (
      <Container>
      <Head {...this.props}/>
      <Content padder>
        <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" expanded={true} animation={true}/>
      </Content>
    </Container>
    )
  }
}

export default FAQScreen;