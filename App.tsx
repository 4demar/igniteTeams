import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import Grupos from '@screens/Grupos';
import NovoGrupo from '@screens/NovoGrupo';
import Jogadores from '@screens/Jogadores';
import { Loading } from '@components/Loading';
import { theme } from 'src/theme';

export default function App() {

  //previnir o não carregamento da fonte
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Jogadores /> : <Loading />}
    </ThemeProvider>
  );
}