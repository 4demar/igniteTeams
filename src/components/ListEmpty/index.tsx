import { Container, Mensagem } from "./styles";

type props = {
  mensagem: string
}

export function ListEmpty({ mensagem }: props) {
  return (
    <Container>
      <Mensagem>
        {mensagem}
      </Mensagem>
    </Container>
  );
};