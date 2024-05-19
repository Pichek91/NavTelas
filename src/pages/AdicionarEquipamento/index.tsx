import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';


export function AdicionarEquipamento({ navigation }) {
  const { control, handleSubmit, formState: {errors}} = useForm ({})

  function handleSignin (data){
    console.log(data);
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text style={styles.title}>Teste</Text>

      <Controller
        control={control}
        name= "username"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput 
          style={styles.input}
          onChangeText={onChange}
          onBlur= {onBlur}
          value= {value}
          placeholder='Seu Username'
          />
        )}

      />

      <TouchableOpacity style={styles.buton} onPress={handleSubmit(handleSignin)}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>

      <Button
        onPress={() => navigation.navigate('Home')}
        title="Home"
      />
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
    color: '#121212',
    fontWeight:'bold'
  },
  input:{
    width:'90%',
    height:40,
    backgroundColor:'#ffffff'
  }

})