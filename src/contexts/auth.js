import React,{useState, createContext} from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

 export const AuthContext = createContext({});

function AuthProvider({ children}){
  const [user, setUser] = useState({
    nome:'Henrique'
  })
  return(
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;