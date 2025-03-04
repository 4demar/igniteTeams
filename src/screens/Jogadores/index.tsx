import { FlatList } from "react-native";
import { useState } from "react";

import { TextoDestaque } from "@components/TextoDestaque";
import { ButtonIcon } from "@components/ButtonIcon";
import { InputText } from "@components/InputText";
import { Header } from "@components/Header";
import { Filtro } from "@components/FIltro";
import { Container, Form, HeaderList, NumeroJogadores } from "./styles";

export default function Jogadores() {
  const [time, setTime] = useState('Time A')
  const [jogadores, setJogadores] = useState([])

  return (
    <Container>
      <Header showBackButton />
      <TextoDestaque titulo="Nome da turma" subTitulo="adicione a galera e separe os times" />
      <Form>
        <InputText placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon='add' />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filtro
              titulo={item}
              ativo={item === time}
              onPress={() => setTime(item)}
            />
          )}
          horizontal
        />
        <NumeroJogadores>{jogadores.length}</NumeroJogadores>
      </HeaderList>

    </Container>
  )

}


//autoCorrect={false} serve para não aparecer auto correção de texto