import { Container, Card, ItemCard, ImgTheme } from "./styles";
import { Filtro } from "@components/FIltro";
import { useState } from "react";
import themeLight from '@assets/themeLight.png'
import themeDark from '@assets/themeDark.png'
import { useTheme } from "src/hook/useTheme";
import { Header } from "@components/Header";
import { TextoDestaque } from "@components/TextoDestaque";


export function ConfigApp() {
  const { isDarkMode, toggleTheme } = useTheme();

  console.log('Thema => ', isDarkMode)

  return (
    <Container>
      <Header showBackButton />
      <TextoDestaque
        titulo='Configurações'
        subTitulo="Aplique as configurações de tela"
      />

      <Card>
        <ItemCard onPress={toggleTheme}>
          <ImgTheme source={themeLight} />
          <Filtro
            titulo={'Light'}
            ativo={!isDarkMode}

          />
        </ItemCard>

        <ItemCard onPress={toggleTheme}>
          <ImgTheme source={themeDark} />
          <Filtro
            titulo={'Dark'}
            ativo={isDarkMode}
          />
        </ItemCard>
      </Card>
    </Container>
  )
}