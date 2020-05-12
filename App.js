/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component{
  
  state = {
    name:"Jayant",
    status: "Learning"
  }

  handleState(name){
    this.setState(
      {
        name:name
      }
    )
  }

  render(){
  return (
          <View style={styles.container}>
            
            <Text style={styles.textStyle}>{this.state.name}</Text>
            <Text style={styles.textStyle}>{this.state.status}</Text>
            <Button style={styles.buttonStyle} textStyle={styles.textStyle} color='orange' title = "Show last name"
            onPress = {this.handleState.bind(this, this.state.name+" Kapila")}>
            </Button>
            
          </View>
  );
  console.log("updated", this.state)
  }
}

const styles = StyleSheet.create({

  buttonStyle:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'skyblue'
  },

  textStyle: {
    color:'white',
    fontSize: 30,
    marginBottom:10
  },

});

export default App;
