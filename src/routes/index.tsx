import { NavigationContainer } from "@react-navigation/native"
import { AppRoutes } from "./app.routes"
import { View } from "react-native"
import { useTheme } from "styled-components/native"

// aplicado view para evitar efeito de Glitch(Piscada) na navegação
// acontece esse Glitch pq o fundo na tela está branco!

export function Routes() {
  const { COLORS } = useTheme()
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>

  )
}