import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { TextoDestaque } from "@components/TextoDestaque";
import { Button } from "@components/Button";
import { InputText } from "@components/InputText";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function NovoGrupo() {
  const [nomeGrupo, setNomeGrupo] = useState('')
  const navigation = useNavigation()

  const handleCriarGrupo = () => {
    navigation.navigate('jogadores', { grupo: nomeGrupo })
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>

        <Icon />
        <TextoDestaque
          titulo='Nova turma'
          subTitulo='crie a turma para adicionar as pessoas'
        />
        <InputText
          placeholder="Informe o nome da turma"
          value={nomeGrupo}
          onChangeText={setNomeGrupo}
        />
        <Button
          style={{ marginTop: 15 }}
          titulo='Criar'
          onPress={handleCriarGrupo}
        />
      </Content>
    </Container>
  );
};