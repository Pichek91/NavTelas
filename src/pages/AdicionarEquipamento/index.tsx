import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  patrimonio: yup.string().required("Informe o Patrimônio!"),
  setor: yup.string().required("Informe o Setor!"),
  limpezasemanal: yup.string().required("Informe a Data da Limpeza!"),
  datapreventiva: yup.string().required("Informe a Data da Preventiva!"),
  proximapreventiva: yup.string().required("Informe a Data da Próxima Preventiva!"),
  obs: yup.string().required("Informe alguma Observação!")
})

export function AdicionarEquipamento({ navigation }) {
  const { control, handleSubmit, formState: {errors}} = useForm ({
    resolver: yupResolver(schema)

  })


  function handleSignin (data){
    console.log(data);
  }
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Preencha os Campos!</Text>

      <Controller
        control={control}
        name= "patrimonio"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput 
            style={ [
              styles.input, {
                borderWidth: errors.patrimonio && 1,
                borderColor: errors.patrimonio && '#ff375b'

            }]}
            onChangeText={onChange}
            onBlur= {onBlur}
            value= {value}
            placeholder='Patrimônio'
          />
        )}

      />
        {errors.patrimonio && <Text style={styles.labelError}>{errors.patrimonio?.message}</Text>}

        <Controller
        control={control}
        name= "setor"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput 
            style={ [
              styles.input, {
                borderWidth: errors.setor && 1,
                borderColor: errors.setor && '#ff375b'

            }]}
            onChangeText={onChange}
            onBlur= {onBlur}
            value= {value}
            placeholder='Setor'
          />
        )}

      />
        {errors.setor && <Text style={styles.labelError}>{errors.setor?.message}</Text>}

        <Controller
        control={control}
        name= "limpezasemanal"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput 
            style={ [
              styles.input, {
                borderWidth: errors.limpezasemanal && 1,
                borderColor: errors.limpezasemanal && '#ff375b'

            }]}
            onChangeText={onChange}
            onBlur= {onBlur}
            value= {value}
            placeholder='Data da Limpeza Semanal'
          />
        )}

      />
        {errors.limpezasemanal && <Text style={styles.labelError}>{errors.limpezasemanal?.message}</Text>}

        <Controller
        control={control}
        name= "datapreventiva"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput 
            style={ [
              styles.input, {
                borderWidth: errors.datapreventiva && 1,
                borderColor: errors.datapreventiva && '#ff375b'

            }]}
            onChangeText={onChange}
            onBlur= {onBlur}
            value= {value}
            placeholder='Data da Preventiva'
          />
        )}

      />
        {errors.datapreventiva && <Text style={styles.labelError}>{errors.datapreventiva?.message}</Text>}

        <Controller
        control={control}
        name= "proximapreventiva"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput 
            style={ [
              styles.input, {
                borderWidth: errors.proximapreventiva && 1,
                borderColor: errors.proximapreventiva && '#ff375b'

            }]}
            onChangeText={onChange}
            onBlur= {onBlur}
            value= {value}
            placeholder='Próxima Preventiva'
          />
        )}

      />
        {errors.proximapreventiva && <Text style={styles.labelError}>{errors.proximapreventiva?.message}</Text>}

        <Controller
        control={control}
        name= "obs"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput 
            style={ [
              styles.input, {
                borderWidth: errors.obs && 1,
                borderColor: errors.obs && '#ff375b'

            }]}
            onChangeText={onChange}
            onBlur= {onBlur}
            value= {value}
            placeholder='Observações'
          />
        )}

      />
        {errors.obs && <Text style={styles.labelError}>{errors.obs?.message}</Text>}
  

      <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignin)}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Home</Text>
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
    justifyContent: 'center',
    marginBottom:34,
    color: '#0c0c0c',
    fontWeight:'bold'
  },
  input:{
    width:'100%',
    height: 40,
    backgroundColor:'#ffffff',
    paddingHorizontal: 8,
    borderRadius: 4,
    color:'#121212'
  },
  button:{
    width:'100%',
    height: 40,
    backgroundColor: '#45d800',
    borderRadius: 8,
    justifyContent:'center',
    alignItems: 'center',
  },
  buttonText:{
    color:'#fff',
    justifyContent:'center',
    fontWeight:'condensed',
    fontSize: 18
  },
  labelError:{
    width: '100%',
    alignSelf:'flex-start',
    color:'#ff375b',
    marginBottom: 8, 
  }

})