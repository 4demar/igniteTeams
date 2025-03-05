import { TouchableOpacityProps } from "react-native"
import { ButtonTypeStyleProps, Container, Texto } from "./styles";
import { Enum_Prioridade } from "@utils/index";


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