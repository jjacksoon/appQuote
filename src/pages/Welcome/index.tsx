import {
  Container, 
  LogoContent, 
  LogoImage, 
  TitleImage,
  WelcomeSubtitle,
  SignIn
} from './styles';

import LogoImg from '../../../assets/logo.png';
import AppleSvg from '../../../assets/Apple.svg';
import GoogleSvg from '../../../assets/Google.svg';

import {SignInSocialButton} from '../../pages/SignInSocialButton';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

type Nav = {
  navigate: (value: string) => void;
}

export function Welcome(){
  const navigation = useNavigation<Nav>();
  return(
    <Container>
      <StatusBar style="light"/>
      <LogoContent>
        <LogoImage source={LogoImg}></LogoImage>
        <TitleImage>Quote</TitleImage>
      </LogoContent>
      <WelcomeSubtitle>Tenha sempre as melhores citações e reflexões em seu celular diariamente.</WelcomeSubtitle>
      <SignIn>
        <SignInSocialButton
          title='Entrar com Google'
          svg={GoogleSvg}
          onPress={() => navigation.navigate("Quote")}
        />
        <SignInSocialButton
          title='Entrar com Apple'
          svg={AppleSvg}
        />
      </SignIn>
    </Container>

    
  );
}