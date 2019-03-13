import React, { Component } from 'react'
import { Text, View, Modal, TouchableNativeFeedback } from 'react-native'

export default class ModalCard extends Component {
  render() {
    return (    
     <Modal
     animationType="slide"
     transparent={false}
     visible={this.props.modalVisible}
     onRequestClose={() => {
       Alert.alert('Modal has been closed.');
     }}>
     <View style={{marginTop: 22}}>
       <View>
         <Text>Hello World!</Text>

         <TouchableNativeFeedback
           onPress={() => {
             this.props.setModalVisible(!this.props.modalVisible);
           }}>
           <Text>Hide Modal</Text>
         </TouchableNativeFeedback>
       </View>
     </View>
   </Modal>
    )
  }
}
