import React, { Component } from 'react';
// import Style from './Style.js';
import { StyleSheet, Text, View, AppRegistry, TextInput, TouchableHighlight } from 'react-native';

export default class Input extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <View style={ styles.title }> 
        <Text style={ styles.label }>{this.props.label}</Text>
        <TextInput
          style = { styles.titleInput }
          onChangeText={(text) => this.setState({text})}
          value={ this.state.text }
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  title: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#cdcdcd', 
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 50
  },

  label: {
    marginRight: 45,
    color: '#cdcdcd'
  },

  titleInput: {
    height: 20,
    width: 68 + '%', 
    textAlign: 'right',
  },
})