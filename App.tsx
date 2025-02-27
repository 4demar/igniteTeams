import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { ThemeProvider } from 'styled-components/native';
import Grupos from '@screens/Grupos';
import { Loading } from '@components/Loading';
import { StatusBar } from 'react-native';
import { theme } from 'src/theme';
import { NovoGrupo } from '@screens/NovoGrupo';

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <NovoGrupo /> : <Loading />}
    </ThemeProvider>
  );
}