import { useNavigation } from "@react-navigation/native";
import { BackButton, BackIcon, Container, Content, Logo, SettingsButton, SettingsIcon } from "./styles";
import logoImg from '@assets/logo.png'
import { AntDesign } from '@expo/vector-icons'
import { ButtonIcon } from "@components/ButtonIcon";
import { View } from "react-native";

type props = {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: props) {
  const navigation = useNavigation()

  const handleVoltar = () => {
    navigation.navigate('grupos')
  }

  const handleConfig = () => {
    navigation.navigate('configApp')
  }

  return (
    <Container>
      {!showBackButton &&
        <SettingsButton onPress={handleConfig}>
          <SettingsIcon />
        </SettingsButton>
      }
      <Content>
        {showBackButton &&
          <BackButton onPress={handleVoltar}>
            <BackIcon />
          </BackButton>
        }

        <Logo source={logoImg} />

      </Content>
    </Container>
  )

}