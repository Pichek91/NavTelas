import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  username: yup.string().required("Informe seu Nome!")

})


export function AdicionarEquipamento({ navigation }) {
  const { control, handleSubmit, formState: {errors}} = useForm ({
    resolver: yupResolver(schema)

  })


  function handleSignin (data){
    console.log(data);
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text style={styles.title}>Preencha os Campos!</Text>

      <Controller
        control={control}
        name= "username"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput 
            style={ [
              styles.input, {
                borderWidth: errors.username && 1,
                borderColor: errors.username && '#ff375b'

            }]}
            onChangeText={onChange}
            onBlur= {onBlur}
            value= {value}
            placeholder='Seu Username'
          />
        )}

      />
        {errors.username && <Text style={styles.labelError}>{errors.username?.message}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignin)}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>

      <Button style={styles.button}
        onPress={() => navigation.navigate('Home')}
        title="Inicio"
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
    justifyContent: 'center',
    marginBottom:34,
    color: '#121212',
    fontWeight:'bold'
  },
  input:{
    width:'90%',
    height: 40,
    backgroundColor:'#ffffff',
    paddingHorizontal: 8,
    borderRadius: 4,
    color:'#121212'
  },
  button:{
    width:'90%',
    height: 40,
    backgroundColor: '#45d800',
    borderRadius: 8,
    justifyContent:'center',
    alignContent:'center',
  },
  buttonText:{
    color:'#fff',
    justifyContent:'center',
    fontWeight:'bold',
    fontSize: 18
  },
  labelError:{
    width: '90%',
    alignSelf:'flex-start',
    color:'#ff375b',
    marginBottom: 8, 
  }

})