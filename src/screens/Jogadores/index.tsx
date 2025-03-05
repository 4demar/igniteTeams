import { FlatList } from "react-native";
import { useState } from "react";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Filtro } from "@components/FIltro";
import { ListEmpty } from "@components/ListEmpty";
import { InputText } from "@components/InputText";
import { ButtonIcon } from "@components/ButtonIcon";
import { CardJogador } from "@components/CardJogador";
import { TextoDestaque } from "@components/TextoDestaque";
import { Container, Form, HeaderList, NumeroJogadores } from "./styles";
import { Enum_Prioridade } from "src/Utils";
import { useNavigation } from "@react-navigation/native";

export default function Jogadores() {
  const [time, setTime] = useState('Time A')
  const [jogadores, setJogadores] = useState(['Jose', 'Pedro', 'Ana', 'Diego', 'Maria', 'João', 'Vini', 'Marcos'])
  const navigation = useNavigation()

  const removerJogador = (jogador: string) => {
    const novaLista = jogadores.filter(x => x !== jogador)
    setJogadores(novaLista)
  }

  const teste = () => {

    navigation.navigate('grupos')
  }

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
          showsHorizontalScrollIndicator={false}
        />
        <NumeroJogadores>{jogadores.length}</NumeroJogadores>
      </HeaderList>

      <FlatList
        data={jogadores}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <CardJogador
            nome={item}
            onRemove={() => removerJogador(item)}
          />
        )}
        ListEmptyComponent={<ListEmpty mensagem={"Não há pessoas nesse time"} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 50 },
          jogadores.length === 0 && { flex: 1 }
        ]}
      />

      <Button
        titulo="Remover Turma"
        type={"SECONDARY"}
      />
    </Container>
  )

}


//autoCorrect={false} serve para não aparecer auto correção de texto