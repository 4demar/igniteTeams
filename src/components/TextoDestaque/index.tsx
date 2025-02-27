import { Container, SubTitulo, Titulo } from "./styles";

type props = {
  titulo: string
  subTitulo: string
}

export function TextoDestaque({ titulo, subTitulo }: props) {
  return (
    <Container>
      <Titulo>{titulo}</Titulo>
      <SubTitulo>{subTitulo}</SubTitulo>
    </Container>
  )
}