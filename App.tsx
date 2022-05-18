import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components';
import { Welcome } from './src/pages/Welcome';
import theme from './src/global/styles/theme';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return null;
  }
  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>
      <Welcome/>
    </ThemeProvider>
  );
}


