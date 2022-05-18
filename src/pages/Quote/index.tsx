import React from "react";
import {
  AuthorContent, 
  AuthorImage, 
  AuthorName, 
  Container, 
  QuoteMarkLeft,
  QuoteMarkRight,
  QuoteText
} from "./styles";

const quoteLefImg = require('../../../assets/left-quote.png')
const quoteRightImg = require('../../../assets/right-quote.png')
const authorImg = require('../../../assets/clarice_lispector.jpg')

export function Quote(){
  return(
    <Container>
      <QuoteMarkLeft source={quoteLefImg}></QuoteMarkLeft>
      <QuoteText>Que ninguém se engane, só se consegue a simplicidade através de muito trabalho.</QuoteText>

      <AuthorContent>
        <AuthorImage source={authorImg}></AuthorImage>
        <AuthorName>Clarice Lispector</AuthorName>
      </AuthorContent>

      <QuoteMarkRight source={quoteRightImg}></QuoteMarkRight>
    </Container>
  );
}