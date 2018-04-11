import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, AppRegistry, TextInput, TouchableHighlight, ImagePickerIOS } from 'react-native';
import Style from './Style.js';
import Input from './Input.js';
import Button from './Button.js';
import AddImage from './AddImage.js';
import { Font } from 'expo';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      image: '',
      isEditable: true,
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'playfair-bold': require('./assets/fonts/playfair/PlayfairDisplay-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={ styles.container }>
        <Image source={require('./fb-cover-1.jpg')} style={styles.image} />
        {
          this.state.fontLoaded ? (
            <Text style={{ fontFamily: 'playfair-bold', fontSize: 56 }}>
              Hello, world!
            </Text>
          ) : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
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

  image: {
    flex: 1,
    height: 375,
    resizeMode: 'contain',
    alignItems: 'stretch'
  }
})