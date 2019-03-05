import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Card, CardItem, Body, Icon, Content } from "native-base";


export default class MembershipPlan extends Component {
  render() {
    return (
     <Card>
     <CardItem style={styles.grayBackground} header>
     <Text style={[styles.title, {textAlignVertical: "center",textAlign: "center"}]}> Different Membership Plan at BBD International </Text>
     </CardItem>
     <Body style={[styles.grayBackground,{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}]}>
   
       <CardItem style={{flex: 1}}>
       <Icon name="question-circle" style={{fontSize: 80}}/>
       </CardItem>
       <CardItem style={{flex: 1}}>
       <Icon name="file-markdown" style={{fontSize: 80}}/>
       </CardItem>
       <CardItem style={{flex: 1}}>
       <Icon name="cash" style={{fontSize: 80}}/>
       </CardItem>

     </Body>
     <Body style={[styles.grayBackground,{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}]}>
       <Text style={{flex: 1}}>1. Personal Members</Text>
       <Text style={{flex: 1}}>2. Corporate Members</Text>
       <Text style={{flex: 1}}>3. VIP Members</Text>
     </Body>
   </Card>
    )
  }
}

const styles = StyleSheet.create({
 title: {
   fontSize: 20,
   color: "#122e8c"
 },
 heading: {
   fontSize: 15,
   fontWeight: "bold"
 },
 grayBackground:{
   backgroundColor: "#f4f3ee"
 }
});
