import React from "react";
import {FontAwesome , Feather, Entypo} from '@expo/vector-icons';
import {
  AuthorName, 
  Container, 
  QuoteMarkLeft,
  QuoteMarkRight,
  QuoteText,
  ButtonsContainer,
  IconFeather,
  IconEntypo,
  IconFontAwesome,
} from "./styles";

import quoteLefImg from '../../../assets/left-quote.png';
import quoteRightImg from '../../../assets/right-quote.png';

export function Quote(){
  return(
    <Container>
      <QuoteMarkLeft source={quoteLefImg}></QuoteMarkLeft>
      <QuoteText>Que ninguém se engane, só se consegue a simplicidade através de muito trabalho.</QuoteText>
      <AuthorName>Clarice Lispector</AuthorName>
      <QuoteMarkRight source={quoteRightImg}></QuoteMarkRight>

      <ButtonsContainer>
        <IconFeather name="heart"/>
        <IconEntypo name="share"/>
        <IconFontAwesome name="exchange"/>
      </ButtonsContainer>
    </Container>
    
  );
}