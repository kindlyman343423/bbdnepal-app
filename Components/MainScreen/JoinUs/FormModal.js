import React, { Component } from 'react'
import { Text, View, Modal } from 'react-native'

export default class FormModal extends Component {
  render() {
    return (
     <Modal
     animationType="slide"
     transparent={false}
     visible={this.props.modalVisible}
     onRequestClose={() => {
      this.props.setModalVisible(!this.props.modalVisible)
     }}
   >
       <Text>Sup Modal</Text>
   </Modal>
    )
  }
}
