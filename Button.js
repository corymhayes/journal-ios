import React, { Component } from 'react';
// import Style from './Style.js';
import { StyleSheet, Text, View, AppRegistry, TextInput, TouchableHighlight, ImagePickerIOS } from 'react-native';

export default class Button extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <TouchableHighlight style = { styles.nextButton }> 
        <Text style={ styles.nextButtonText }>{ this.props.label }</Text>
      </TouchableHighlight>
    );
  }

}


const styles = StyleSheet.create({
  nextButton: {
    backgroundColor: '#2c2c2c',
    width: 100+'%',
    height: 65,
    marginTop: 10
  },

  nextButtonText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 18,
    fontWeight: 'bold'
  }
})