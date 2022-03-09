import React, { Component } from 'react'
import { Text,  TextInput, View, TouchableOpacity, Keyboard } from 'react-native'
import axios from 'axios'
import styles from '../style/styles.js'
  
export default class AddProduct extends Component {  
  
  constructor(props) {  
    super(props)
    this.state = { id: '', name: '', brand: '', description: '', price: '' }
    this.addProduct = this.addProduct.bind(this)
  }
    
  addProduct() {
    axios.post('http://localhost:3000/products/add', this.state)
        .then(res => {
          this.setState({ id: '', name: '', brand: '', description: '', price: '' })
          this.props.navigation.navigate('List')
        })
        .catch(function (error) {  
          console.log(error)  
        })
  }
  
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.header1 }>Add Product</Text>
        <View style={ styles.container }>
        <Text>Implement an Add here</Text>
          </View>
      </View>
    )
  }
}