import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Button = styled(RectButton)`
  height: 54px;
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
  margin-bottom: 16px;
`;
export const ImageContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-color: ${({ theme }) => theme.colors.secondary};
  border-right-width: 0.8px;
`;

export const ButtonTitle = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${({theme}) => theme.fonts.medium };
  color: ${({theme}) => theme.colors.text_login_button};
  font-size: 20px;
`;