import styled from "styled-components/native";
import {Feather, FontAwesome, Entypo} from '@expo/vector-icons';


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

export const AuthorName = styled.Text`
  font-size: 12px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
  align-self: flex-end;
  margin-right: 25px;
  margin-bottom: 10px;
`;

export const IconBorder = styled.TouchableOpacity`
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: 50px;
  padding: 5px;
`;

export const IconFontAwesome = styled(FontAwesome)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ButtonsContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  padding: 0 120px;
  justify-content: space-between;  
`;