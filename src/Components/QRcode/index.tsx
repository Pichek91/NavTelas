import { View, Text,  } from "react-native";
import { StatusBar } from "expo-status-bar";

export const QRcode =   () => {
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style= {{color: '#f0f', fontSize: 50}}>Inicio!</Text>
    </View>
    );
  }