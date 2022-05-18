import React from 'react';
import {
  Container, 
  LogoContent, 
  LogoImage, 
  TitleImage,
  WelcomeSubtitle
} from './styles';

const LogoImg = require('../../../assets/logo.png');

export function Welcome(){
  return(
    <Container>
      <LogoContent>
        <LogoImage source={LogoImg}></LogoImage>
        <TitleImage>Quote</TitleImage>
      </LogoContent>
      <WelcomeSubtitle>Tenha sempre as melhores citações e reflexões em seu celular diariamente.</WelcomeSubtitle>
    </Container>
  );
}