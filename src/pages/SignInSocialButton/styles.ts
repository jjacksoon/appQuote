import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Button = styled(RectButton)`
  height: 56px;
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
  margin-bottom: 16px;
`;
export const ImageContainer = styled.View``;
export const ButtonTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular };
`;