import React, { useState } from "react";
import {FontAwesome , Feather, Entypo} from '@expo/vector-icons';
import {
  AuthorName, 
  Container, 
  QuoteMarkLeft,
  QuoteMarkRight,
  QuoteText,
  ButtonsContainer,
  // IconFeather,
  IconEntypo,
  IconFontAwesome,
  IconBorder
} from "./styles";

import quoteLefImg from '../../../assets/left-quote.png';
import quoteRightImg from '../../../assets/right-quote.png';

export function Quote(){
  const[liked, setLiked] = useState(false);

  function handleLikeButton(){
    setLiked((isLiked) => !isLiked);
  }
  function nameIcon(liked : boolean){
    return(liked ? "heart" : "heart-o");
  }

  return(
    <Container>
      <QuoteMarkLeft source={quoteLefImg}></QuoteMarkLeft>
      <QuoteText>Que ninguém se engane, só se consegue a simplicidade através de muito trabalho.</QuoteText>
      <AuthorName>Clarice Lispector</AuthorName>
      <QuoteMarkRight source={quoteRightImg}></QuoteMarkRight>

      <ButtonsContainer>
        <IconBorder onPress={handleLikeButton}><IconFontAwesome name={nameIcon(liked)}/></IconBorder>
        <IconBorder><IconEntypo name="share"/></IconBorder>
        <IconBorder><IconFontAwesome name="exchange"/></IconBorder>
      </ButtonsContainer>
    </Container>
    
  );
}