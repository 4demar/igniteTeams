import { TouchableOpacityProps } from "react-native"
import { ButtonTypeStyleProps, Container, Texto } from "./styles";


type props = TouchableOpacityProps & {
  titulo: string;
  type?: ButtonTypeStyleProps;
}

export function Button({ titulo, type = 'PRIMARY', ...rest }: props) {

  return (
    <Container type={type} {...rest}>
      <Texto>
        {titulo}
      </Texto>
    </Container>
  )
}