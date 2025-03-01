import { TouchableOpacityProps } from "react-native";
import { Container, filtroProps, Titulo } from "./styles";

type props = TouchableOpacityProps & filtroProps & {
  titulo: string
}

export function Filtro({ titulo, ativo = false, ...rest }: props) {

  return (
    <Container {...rest}
      ativo={ativo}
    >
      <Titulo>
        {titulo}
      </Titulo>
    </Container>
  )

}