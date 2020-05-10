import styled from 'styled-components/native';

export const Background = styled.View`
  flex:1;
  background-color:#001d26;

`;

export const Container = styled.KeyboardAvoidingView`
flex:1;
align-items: center;
justify-content: center;

`;

export const Logo = styled.Image`
margin-bottom: 60px;

`;

export const AreaInput = styled.View`
flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255,0.30)'
})`
background-color: rgba(20,143,206,0.23);
width: 90%;
font-size: 17px;
color: #FFF;
margin-bottom: 15px;
padding: 10px;
border-radius: 15px;
text-align: center;
`;

export const SubmitButton = styled.TouchableOpacity`
 align-items:center;
 justify-content:center;
 background-color: #fff;
 width:70%;
 height: 45px;
 border-radius: 15px;
 margin-top: 10px;
`;

export const SubmitText = styled.Text`
 font-size:20px;
 font-weight: bold;
 color:#001d26;
`;

export const Link = styled.TouchableOpacity`
 margin-top: 20px;
 margin-bottom: 5px;

`;

export const LinkText = styled.Text`
 color: #FFF;
 font-size: 15px;
`;