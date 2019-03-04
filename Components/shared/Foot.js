import React, { Component } from 'react'

import {
 Footer,
 FooterTab,
 Button,
 Text
} from "native-base";

export default class Foot extends Component {
  render() {
    return (
     <Footer>
     <FooterTab style={{ backgroundColor: "#555555" }}>
       <Button full>
         <Text>Footer</Text>
       </Button>
     </FooterTab>
   </Footer>
    )
  }
}
