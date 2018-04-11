import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, AppRegistry, TextInput, TouchableHighlight, ImagePickerIOS } from 'react-native';
import Style from './Style.js';
import Input from './Input.js';
import Button from './Button.js';
import AddImage from './AddImage.js';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      image: '',
      isEditable: true
    };
  }

  render() {
    return (
      <View style={ styles.container }>

        <View style={ styles.nav }>
          <TouchableHighlight style={ styles.cancelButton }>
            <Text style={styles.cancelText}>CANCEL</Text>
          </TouchableHighlight>
        </View>

        <AddImage />
        
        <Input label="TITLE" />
        <Input label="DATE" />
        <Input label="VERSE" />

        <Button label="NEXT" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  nav: {
    backgroundColor: '#fff',
    height: 100 + '%',
    width: 100 + '%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  cancelText: {
    color: '#2c2c2c',
    marginTop: 30,
    marginRight: 25,
    fontWeight: 'bold'
  },

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