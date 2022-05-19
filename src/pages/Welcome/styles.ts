import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
  padding: 25px;
`;

export const LogoContent = styled.View`
  margin: 50px 0;
`;

export const LogoImage = styled.Image`
  width: 100px;
  height: 130px;
`;

export const TitleImage = styled.Text`
  font-size: 36px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.secondary};
`;

export const WelcomeSubtitle = styled.Text`
  font-size: 20px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
  text-align: center;
  margin-top: 150px;
  margin-bottom: 174px;
`;

export const SignIn = styled.View`
  width: 100%;
  height: 30%;
`;
