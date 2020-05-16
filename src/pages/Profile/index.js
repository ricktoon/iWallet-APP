import React , {useContext}from 'react';
import { View, Text } from 'react-native';
import {AuthContext} from '../../contexts/auth';
import {useNavigation} from '@react-navigation/native'

import {Container, Nome, NewLink,NewText, Logout, LogoutText} from './styles'
export default function New() {
const navigation = useNavigation();
const {user, signOut} = useContext(AuthContext);

 return (
   <Container>
     <Nome>
       {user && user.nome}
     </Nome>
       <NewLink onPress={ ()=> navigation.navigate('Registrar') }>
         <NewText>
           Registrar gastos
         </NewText>
       </NewLink>

       <Logout
       onPress={() => signOut()}
       >
       <LogoutText> Sair </LogoutText>
       </Logout>
   </Container>
  );
}