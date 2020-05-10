import React, {useState} from 'react';
import { View ,Text} from 'react-native';
import {Background,Container,Logo, AreaInput, Input, SubmitButton, SubmitText,
LinkText,Link} from './styles'


export default function SignIn() {
 const[email, setEmail] = useState('');
 const[password, setPassword] = useState('');

 return (
    <Background>
          <Container>
            <Logo source={require('../../assets/logo.png')}/>

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
              <SubmitText>Acessar</SubmitText>
            </SubmitButton>

            <Link>
             <LinkText> Crie sua conta!</LinkText>
            </Link>
          </Container>
    </Background>
  );
}