import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { HomeScreen } from './src/pages/HomeScreen';
import { NotificationsScreen } from './src/pages/NotificationsScreen';
import { AdicionarEquipamento } from './src/pages/AdicionarEquipamento';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer screenOptions={{draweStyle: { backgroudColor: 'pink', width: 240},}}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notificações" component={NotificationsScreen} />
        <Drawer.Screen name="Adicionar Equipamento" component={AdicionarEquipamento} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styleScreen = 