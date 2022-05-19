import React, { useEffect, useState } from "react";
import {FontAwesome , Feather, Entypo} from '@expo/vector-icons';
import {
  AuthorName, 
  Container, 
  QuoteMarkLeft,
  QuoteMarkRight,
  QuoteText,
  ButtonsContainer,
  // IconFeather,
  // IconEntypo,
  IconFontAwesome,
  IconBorder
} from "./styles";

import quoteLefImg from '../../../assets/left-quote.png';
import quoteRightImg from '../../../assets/right-quote.png';
import { StatusBar } from "expo-status-bar";

interface quoteInfo{
  author: string,
  text: string
}

const url = "https://type.fit/api/quotes";
let data : quoteInfo[];
const randomNumber = () => Math.floor(Math.random()*data.length) + 1;

export function Quote(){
  const[liked, setLiked] = useState(false);
  const[quotes, setQuotes] = useState({} as quoteInfo);
  
  useEffect(() => {
    getQuotes();
  }, []);

 async function getQuotes(){
   try {
    const res=  await fetch(url);
    data = await res.json();
    setQuotes(data[randomNumber()]);
    
   } catch (error) {
     console.warn(error);
   }
 }

  function handleLikeButton(){
    setLiked((isLiked) => !isLiked);
  }
  function nameIcon(liked : boolean){
    return(liked ? "heart" : "heart-o");
  }

  return(
    <Container>
      <StatusBar style="light"/>
      <QuoteMarkLeft source={quoteLefImg}></QuoteMarkLeft>
      <QuoteText>{quotes.text}</QuoteText>
      <AuthorName>{quotes.author}</AuthorName>
      <QuoteMarkRight source={quoteRightImg}></QuoteMarkRight>

      <ButtonsContainer>
        <IconBorder onPress={handleLikeButton}><IconFontAwesome name={nameIcon(liked)}/></IconBorder>
        <IconBorder onPress={getQuotes}><IconFontAwesome name="exchange"/></IconBorder>
      </ButtonsContainer>
    </Container>
    
  );
}