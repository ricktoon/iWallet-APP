import React,{useState, useContext} from 'react';
import { SafeAreaView, Keyboard, TouchableNativeFeedback, Alert } from 'react-native';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native'
import firebase from '../../service/firebaseConnection';
import {AuthContext} from '../../contexts/auth';

import {Background, Input, SubmitButton, SubmitText, Logo} from './style';
import Picker from '../../components/Picker';


export default function New() {
    const navigation = useNavigation();

    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState(null);
    const { user: usuario } = useContext(AuthContext);

 function handleSubmit(){
   Keyboard.dismiss();
   if(isNaN(parseFloat(valor)) || tipo ===null){
     alert('Preencha todos os campos!');
     return;
   }
   Alert.alert(
     'Confirmando dados',
       `Tipo: ${tipo} - Valor: ${parseFloat(valor)}`,
       [
         {
           text: 'cancelar',
           style: 'cancel'
         },
         {
           text: 'Continuar',
           onPress:() => handleAdd()
         }
       ]
   )
 }

 async function handleAdd(){
   let uid = usuario.uid;

   let key = await firebase.database().ref('historico').child(uid).push().key;
   await firebase.database().ref('historico').child(uid).child(key).set({
    tipo: tipo,
    valor: parseFloat(valor),
    date: format(new Date(), 'dd/MM/yy')
   })

   let user = firebase.database().ref('users').child(uid);
   await user.once('value').then((snapshot)=>{
     let saldo = parseFloat(snapshot.val().saldo);

     tipo === 'despesa' ? saldo -= parseFloat(valor) : saldo += parseFloat(valor);

     user.child('saldo').set(saldo);
   });
   Keyboard.dismiss();
   setValor('');
   navigation.navigate('Home');
 }

 return (
   <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}> 
   <Background> 
     
     <SafeAreaView style={{alignItems: 'center'}}>
     
      <Input
      placeholder="Insira o valor"
      keyboardType="numeric"
      returnKeyType="next"
      onSubmitEditing={()=> Keyboard.dismiss()}
      value={valor}
      onChangeText={(text) => setValor(text) }
      />
      <Picker onChange={setTipo}/>

      <SubmitButton onPress={handleSubmit}>
        <SubmitText> Registrar </SubmitText>
      </SubmitButton>

     </SafeAreaView>

   </Background>
   </TouchableNativeFeedback>
  );
}