import React,{useContext, useState} from 'react';
import { View, Text, Button } from 'react-native';
import {AuthContext} from '../../contexts/auth';
import HistoricoList from '../../components/HistoricoList';


import {Background, Container, Nome, Saldo, Title, List } from './style';

export default function Home() {
  const {user} = useContext(AuthContext);
  const [historico , setHistorico] = useState([
      {key: '1', tipo: 'receita' , valor: 1200},
      {key: '2', tipo: 'despesa' , valor: 200},
      {key: '3', tipo: 'receita' , valor: 100},
      {key: '4', tipo: 'receita' , valor: 50.20},
  ]);
 return (
  <Background>
    <Container>
        <Nome>Henrique </Nome>
        <Saldo>R$ 1.000.000,00</Saldo>
    </Container>
     
     <Title>Ultimas movimentações</Title>

     <List
      showVerticalScrollindicator={false}
      data={historico}
      keyExtractor={item => item.key}
      renderItem={ ({ item })=> (<HistoricoList/>)}

     />
  </Background>
  );
}