import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function TelaInicial() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Inicio!</Text>
      <Image>./assets/icon.png</Image>
    </View>
  );
}

function TelaConfig() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Configurações</Text>
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
