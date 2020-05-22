import styled from 'styled-components/native';



export const Background = styled.View`
flex: 1;
background-color: #001d26;
justify-content: center;
`;


export const Logo = styled.Image`
margin-bottom: 20px;
`;

export const Titulo = styled.Text`
font-size: 25px;
color: #FFF;
text-align: center;
margin-bottom: 50px;
`;

export const Input  = styled.TextInput.attrs({
  placeholderTextColor:'#222'
})`
height: 50px;
width: 90%;
background-color: rgba(255,255,255, 0.9);
margin-top:30px;
font-size: 16px;
border-radius: 3px;

`;

export const SubmitButton = styled.TouchableOpacity`
justify-content: center;
align-items: center;
background-color: #00b94a;
width: 90%;
height: 50px;
border-radius: 10px;
margin-top: 20px;
`;

export const SubmitText = styled.Text`
font-size: 20px;
font-weight: bold;
color: #FFF;

`;

 



