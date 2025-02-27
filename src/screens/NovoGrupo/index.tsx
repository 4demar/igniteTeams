import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { TextoDestaque } from "@components/TextoDestaque";
import { Button } from "@components/Button";
import { InputText } from "@components/InputText";

export function NovoGrupo() {

  return (
    <Container>
      <Header showBackButton />
      <Content>

        <Icon />
        <TextoDestaque
          titulo='Nova turma'
          subTitulo='crie a turma para adicionar as pessoas'
        />
        <InputText placeholder="Informe o nome da turma" />
        <Button
          style={{ marginTop: 15 }}
          titulo='Criar'
        />
      </Content>
    </Container>
  );
};