import React, {createContext, ReactNode, useContext} from 'react';
import * as AuthSession from 'expo-auth-session';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthorizationResponse {
  params:{
    access_token: string;
  },
  type: string;
}

interface User {
  id: string,
  name: string,
  email: string
}

interface AuthContextData {
  user: User;
  signInWithGoogle(): Promise<void>;
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({children} : AuthProviderProps){
  const user = {
    id: '1234',
    name: 'Jackson Nascimento',
    email: 'jjacksoon10@gmail.com'
  }
  
  async function signInWithGoogle() {
    try {
      const CLIENT_ID = '829098917575-gvnh8337r8f2mtiut2fpq4hujfpsau9l.apps.googleusercontent.com';
      const REDIRECT_URI = 'https://auth.expo.io/@jjacksoon/appQuote';
      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURI('profile email');

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const {type, params} = await AuthSession.startAsync({authUrl}) as AuthorizationResponse;

      if(type === 'success'){
        const response = await fetch(`http://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${params.access_token}`);
        const userInfo = await response.json();
        console.log(userInfo);
      }

    } catch (e : any) {
      throw new Error(e);
    }
  }

  return(
    <AuthContext.Provider value={{user, signInWithGoogle}}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(){
  const context = useContext(AuthContext);
  return context;
}

export {AuthProvider, useAuth}

