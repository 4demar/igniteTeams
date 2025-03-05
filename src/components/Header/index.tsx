import { useNavigation } from "@react-navigation/native";
import { BackButton, BackIcon, Container, Logo } from "./styles";
import logoImg from '@assets/logo.png'

type props = {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: props) {
  const navigation = useNavigation()

  const handleVoltar = () => {
    navigation.navigate('grupos')
  }

  return (
    <Container>
      {showBackButton &&
        <BackButton onPress={handleVoltar}>
          <BackIcon />
        </BackButton>
      }
      <Logo source={logoImg} />
    </Container>
  )

}