import React, { Component } from 'react';
import Style from './Style.js';
import Input from './Input.js';
import Button from './Button.js'
import { StyleSheet, Text, View, Image, AppRegistry, TextInput, TouchableHighlight, ImagePickerIOS } from 'react-native';

export default class AddImage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      image: '',
      noImageSelected: true
    };
  }

  render() {
    return (
      this.state.noImageSelected ?  
      <TouchableHighlight 
      underlayColor='#cdcdcd'
        style={ styles.addImageButton } 
        onPress={ () => { 
          ImagePickerIOS.openSelectDialog(
            {}, 
            imageUri => { this.setState({...this.state, image: imageUri, noImageSelected: false}) },
            error => { console.log(error); }
          )
        }}
      >
        <Text>add image</Text>
      </TouchableHighlight> 
      :
      <TouchableHighlight 
      underlayColor='#cdcdcd'
        style={ styles.addImageButton } 
        onPress={ () => { 
          ImagePickerIOS.openSelectDialog(
            {}, 
            imageUri => { this.setState({...this.state, image: imageUri, noImageSelected: false}) },
            error => { console.log(error); }
          )
        }}
      >
         <Image source={{uri: this.state.image}} style={{width: 100 +'%', height: 100+'%'}} />
      </TouchableHighlight> 
    );
  }
}

const styles = StyleSheet.create({
  addImageButton: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: 375,
    width: 100 + '%',
    backgroundColor: '#cdcdcd',
    marginBottom: 45
  }
})