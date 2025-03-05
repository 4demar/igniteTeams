import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Grupos from "@screens/Grupos";
import Jogadores from "@screens/Jogadores";
import NovoGrupo from "@screens/NovoGrupo";

//const NativeStack = createNativeStackNavigator();
const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {

  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name='grupos'
        component={Grupos}
      />
      <Screen
        name='novoGrupo'
        component={NovoGrupo}
      />
      <Screen
        name='jogadores'
        component={Jogadores}
      />
    </Navigator>
  )
}