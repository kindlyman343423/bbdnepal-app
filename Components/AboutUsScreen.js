import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Container, Card, CardItem, Content } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

import Head from "./shared/Head";

const data = [
 'This company is established by Nepalese investment only.',
 'This is not a networking company. It works under the law and works provides service and distributes the income in accordance with its plan.',
 'This company helps to improve your business by making agreements and providing you different opportunities.',
 'Company will remain under the laws and will work only after taking necessary permission from the law.',
 'Company is providing benefits to its investors, involved people, organization and institutions from the beginning and will continue to do so in the future.',
 'Discount card, Agent card, and opportunity to work as a sub agent will provide in company.',
 'Taking the needs of the involved people organization and institutions in consideration and with required permission, company will open its branches in different parts of nations as well as in other countries.',
 'All the activities of company will be under the laws and will be transparent.',
 'Thousands of people, organization and institutions are involved with us at present and our aim to increase these figures to millions in near future. All the information will soon be available in our website.',
 'All the information about the services and facility provided by the company can be obtained from our website.',
 'All the stock of the investors will be safe under the company until listing doesn’t take place. Transfer of the stock can be done by the investors in collaboration with the company.',
 'We are purely established as service Provider Company. We are not networking company and we suggest every one not to get involved with us influenced by any kind of greed or other such thinking.'   
]

class AboutUsScreen extends Component {
  static navigationOptions = {
    drawerLabel: "About Us"
  };

  renderBullets = (points, index) => {
    return (
      <CardItem key={index} style={{ flexDirection: "row" }}>
        <Text>{"\u2022"}</Text>
        <Text style={{ flex: 1, paddingLeft: 5 }}>{points}</Text>
      </CardItem>
    );
  };

  render() {
    return (
      <Container>
        <ScrollView>
          <Head {...this.props} />
          <Content>
            <Card>
              <CardItem header>
                <Text style={styles.title}>About Us</Text>
              </CardItem>
              <CardItem>
                <Text>
                  BBD International Pvt. Ltd. is a modified name of a private
                  company which was registered in 2065 BS according to company
                  law 2063 B.S. It is a unique and successful company that has
                  been doing different kind of work and providing different king
                  of facilities. Various types of business are being operated
                  under this company. Few of them are co-operatives, Real state,
                  Mart, Consultancy and other large of small business.
                </Text>
              </CardItem>
              <CardItem>
                <Text>
                  We are also aiming to transform this company to public company
                </Text>
              </CardItem>
              {data.map((item, index) => this.renderBullets(item, index))}
            </Card>
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "#122e8c"
  }
});

export default AboutUsScreen;
