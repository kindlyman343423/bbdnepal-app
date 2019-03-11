import React, { Component } from "react";
import { Card, CardItem, Text, Container, Content } from "native-base";
import { StyleSheet, Image } from "react-native";

class Members extends Component {
  render() {
  console.log(this.props)
    return (
      <Card>
        <CardItem header>
          <Text>{this.props.heading}</Text>
        </CardItem>

     {this.props.cards && this.props.cards.map((member, i) => (
       
               <Content key={i}>
               <CardItem cardBody>
                 <Image
                   source={require(`../../assets/images/member1.jpg`)}
                   style={styles.image}
                 />
               </CardItem>
               <CardItem>
                 <Text style={{ fontSize: 20 }}>{member.title}</Text>
               </CardItem>
               <CardItem>
                 <Text>
                   {member.desc}
                 </Text>
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
  }
});

export default Members;
