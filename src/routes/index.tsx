import { StatusBar, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import styled, { ThemeProvider } from "styled-components/native"
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { AppRoutes } from "./app.routes"
import { Loading } from "@components/Loading"
import { useTheme } from 'src/hook/useTheme';

// aplicado view para evitar efeito de Glitch(Piscada) na navegação
// acontece esse Glitch pq o fundo na tela está branco!

export function Routes() {
  const typeTheme = useTheme()

  //previnir o não carregamento da fonte
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <Container>
      <ThemeProvider theme={typeTheme}>
        <StatusBar
          barStyle={typeTheme.isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor='transparent'
          translucent
        />
        {fontsLoaded
          ?
          <NavigationContainer>
            <AppRoutes />
          </NavigationContainer>
          :
          <Loading />
        }
      </ThemeProvider>
    </Container>

  )
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background};
`