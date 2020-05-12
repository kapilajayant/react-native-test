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
  TouchableOpacity,
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
            <StatusBar backgroundColor={'skyblue'}/>
            <Text style={styles.textStyle}>{this.state.name}</Text>
            <Text style={styles.textStyle}>{this.state.status}</Text>
            <Button style={styles.buttonStyle} title="last name"
            onPress = {this.handleState.bind(this, this.state.name+" Kapila")}>
            </Button>
            <TouchableOpacity 
            style={styles.touchableStyle} 
            onPress = {()=>{Alert.alert("Goddamn!")}}>
              <Text>Damn it</Text>
            </TouchableOpacity>
            
          </View>
  );
  console.log("updated", this.state)
  }
}

const styles = StyleSheet.create({

  buttonStyle:{

    backgroundColor:'black'

  },

  touchableStyle:{
    marginTop:20,
    backgroundColor:'orange',
    padding:10,
    
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
