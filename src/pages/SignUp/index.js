import React, {useState} from 'react';
import {Platform} from 'react-native';
import {Background,Container,Logo, AreaInput, Input, SubmitButton, SubmitText,} from './styles'


export default function SignUp() {
 const[nome, setNome] = useState('');
 const[email, setEmail] = useState('');
 const[password, setPassword] = useState('');

 return (
    <Background>
          <Container
          behavior={Platform.OS==='ios' ? 'padding' : ''}
          >
          

            <AreaInput>
            <Input
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"  
            value={email}
            onChangeText={(text) => setNome(text)}
            />   
            </AreaInput>

            <AreaInput>
            <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"  
            value={email}
            onChangeText={(text) => setEmail(text)}
            />   
            </AreaInput>

            <AreaInput>
            <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"  
            onChangeText={(text) => setPassword(text)}
            />   
            </AreaInput>

            <SubmitButton>
              <SubmitText>Cadastrar</SubmitText>
            </SubmitButton>

            
          </Container>
    </Background>
  );
}