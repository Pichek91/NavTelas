import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  QRcode from './src/QRcode';

function TelaInicial() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style= {{color: '#f0f', fontSize: 50}}>Inicio!</Text>
    </View>
  );
}

function TelaConfig() {
  return (
    <View>
      <QRcode/>
  </View>
  );
}

function TelaGuia() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Guia 2</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={TelaInicial} />
        <Tab.Screen name="Configurações" component={TelaConfig} />
        <Tab.Screen name="Guia" component={TelaGuia} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
