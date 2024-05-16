import { View, Text,  } from "react-native";
import { StatusBar } from "expo-status-bar";

export const QRcode =   () => {
    return(
    <View style={{
        alignItems:'center',
        justifyContent:'center',
        width: '100%',
        height: 50,
        backgroundColor:'#070707',
      }}
      >
        <Text style={{
          color:'#ffffff',
        }}>GRANCOFFEE Preventivas Estou ficando bom!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }