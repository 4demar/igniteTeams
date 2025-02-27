import { Container, Icon, Titulo } from "./styles"
import { TouchableOpacityProps } from "react-native"

//junta as duas props
type props = TouchableOpacityProps & {
  titulo: string
}

//...rest é o resto da propriedade não passada, nesse caso é do TouchableOpacity
export function CardGrupo({ titulo, ...rest }: props) {

  return (
    <Container {...rest}>
      <Icon />
      <Titulo>{titulo}</Titulo>
    </Container>

  )

}