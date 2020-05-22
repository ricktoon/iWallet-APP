import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${Platform.OS === 'ios' ? '#00000066' : 'transparent'};
  position: absolute;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
`;

export const Header = styled.View`
width: 100%;
padding: 16px;
justify-content: flex-end;
align-items:flex-end;
background-color: white;
border-bottom-width: 1px;
border-color: gray;
`;
