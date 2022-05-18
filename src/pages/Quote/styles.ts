import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 32px;
  background: ${({theme}) => theme.colors.primary};
`;

export const QuoteMarkLeft = styled.Image`
  width: 50px;
  height: 50px;
`;

export const QuoteMarkRight = styled.Image`
  width: 50px;
  height: 50px;
  align-self:flex-end;
`;

export const QuoteText = styled.Text`
  font-size: 22px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text};
  text-align: center;
  padding: 16px;
`;

export const AuthorContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AuthorImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  margin-right: 150px;
  margin-left: 20px;
`;

export const AuthorName = styled.Text`
  font-size: 12px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
`;