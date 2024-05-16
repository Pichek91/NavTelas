import * as React from 'react';
import { Text, View, Image,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function TelaInicial() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style= {{color: '#f0f', fontSize: 50}}>Inicio!</Text>
    </View>
  );
}

function TelaConfig() 
        return (
            <View style={styles.container}>
                <Image
                source={require('./assets/icon.png')}
                style={styles.logo}
                />
    
                <Text style={styles.title}>20 Caracteres</Text>
    
                <View style={styles.area}>
                    <Slider
                    style={{height: 50}}
                    minimumValue={6}
                    maximumValue={20}
                    maximumTrackTintColor="red"
                    minimumTrackTintColor='red'
                    thumbTintColor='blue'
                    />
                </View>
    
                <TouchableOpacity style={styles.button}>
                <Text styles={styles.buttonText}>Gerar Senha</Text>
                </TouchableOpacity>
    
            </View>
        );
    
    const styles = StyleSheet.create({
       container: {
        flex: 1,
        backgroundColor: '#F3F3FF',
        alignItems: 'center',
        justifyContent: 'center',
       } ,
       logo:{
        marginBottom: 60
       },
       area:{
        marginTop: 14,
        marginBottom: 14,
        width:"80%",
        backgroundColor:"blue",
        borderRadius: 8,
        padding: 8,
       },
       button:{
        backgroundColor:"blue",
        width: "80%",
        height: 50,
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 8,
        marginBottom:18,
       },
        buttonText:{
        color: "gold",
        fontSize: 20,
        
       }
    
    });

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
