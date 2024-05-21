import * as React from 'react';
import { Button, View, StyleSheet,Image,Text, TouchableOpacity, Linking } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Foundation } from '@expo/vector-icons';

function linkExternal (){
  Linking.openURL('https://grancoffee.com.br/');

}


export function HomeScreen({ navigation }) {
  return (
    <View style = {styles.container}>
      <TouchableOpacity style={styles.button} onPress={linkExternal}>
        <Text style={styles.buttonText}>Visite nosso Site</Text>
        <Foundation name="web" size={34} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f0f4ff',
    paddingHorizontal:18
  },
  title:{
    fontSize:34,
    marginBottom:34,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#121212',
    fontWeight:'bold'
  },
  input:{
    width:'100%',
    height: 40,
    backgroundColor:'#ffffff',
    paddingHorizontal: 8,
    marginBottom: 8,
    borderRadius: 4,
    color:'#121212'
  },
  button:{
    width:'50%',
    height: 60,
    backgroundColor: '#45d800',
    borderRadius: 8,
    marginBottom: 8,
    justifyContent:'center',
    alignItems: 'center',
  },
  buttonText:{
    color:'#fff',
    justifyContent:'center',
    fontWeight:'bold',
    fontSize: 18
  },
  labelError:{
    width: '100%',
    alignSelf:'flex-start',
    color:'#ff375b',
    marginBottom: 8, 
  }

})