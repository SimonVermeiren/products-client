import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, Keyboard, FlatList } from 'react-native'
import styles from '../style/styles.js'
import axios from 'axios'

export default class SearchProduct extends Component {  
  
  constructor(props) {  
    super(props)
    this.state = { name: '', products: [] }
    this.searchAll = this.searchAll.bind(this)
  }

  searchAll() {
    axios.post('http://localhost:3000/products/searchAll', { name: this.state.name })
      .then(json => {  
        const products = json.data
        this.setState({ products: products })
      })  
      .catch(function (error) {  
        console.log(error)  
      }) 
  }

  renderItem(item) {
    return (<TouchableOpacity
              onPress={() => {
              this.props.navigation.navigate('Edit', { name: item.name }) }}>
              <View style={ styles.item }>
                <Text style={ styles.product }>{ item.name } - { item.brand } - { item.price }€</Text>
              </View>
            </TouchableOpacity>)
  }

  render() {
    return (
      <View style={ styles.container }>
          <Text style={ styles.header1 }>Search Product</Text>
          <View style={ styles.container }>
          <Text>Implement a Search here</Text>
        </View>
      </View>
    )
  }  
}  
