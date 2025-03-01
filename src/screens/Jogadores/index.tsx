import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { TextoDestaque } from "@components/TextoDestaque";
import { ButtonIcon } from "@components/ButtonIcon";
import { InputText } from "@components/InputText";
import { Filtro } from "@components/FIltro";

export default function Jogadores() {

  return (
    <Container>
      <Header showBackButton />
      <TextoDestaque titulo="Nome da turma" subTitulo="adicione a galera e separe os times" />
      <Form>
        <InputText placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon='add' />
      </Form>
      <Filtro titulo="Time A" ativo />
    </Container>
  )

}


//autoCorrect={false} serve para não aparecer auto correção de texto