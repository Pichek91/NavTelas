import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

import { HomeScreen } from './src/pages/HomeScreen';
import { NotificationsScreen } from './src/pages/NotificationsScreen';
import { AdicionarEquipamento } from './src/pages/AdicionarEquipamento';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Adicionar Equipamento" component={AdicionarEquipamento} />
      </Drawer.Navigator>
    </NavigationContainer>
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
      width:'100%',
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