import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert, FlatList, TextInput } from "react-native";
import { useEffect, useRef, useState } from "react";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Filtro } from "@components/FIltro";
import { ListEmpty } from "@components/ListEmpty";
import { InputText } from "@components/InputText";
import { ButtonIcon } from "@components/ButtonIcon";
import { CardJogador } from "@components/CardJogador";
import { TextoDestaque } from "@components/TextoDestaque";
import { Container, Form, HeaderList, NumeroJogadores } from "./styles";
import { Enum_Prioridade } from "@utils/appEnum";
import { JogadoresDTO } from "@storage/jogadores/jogadoresDto";
import { useJogadores } from "@storage/jogadores/useJogadores";
import { AppError } from "@utils/appError";
import { useGrupos } from "@storage/grupos/useGrupos";
import { Loading } from "@components/Loading";

type RouteParams = {
  grupo: string
}

export default function Jogadores() {
  const [loading, setLoading] = useState(true)
  const [jogador, setJogador] = useState('')
  const [time, setTime] = useState('Time A')
  const [jogadores, setJogadores] = useState<JogadoresDTO[]>([])

  const navigate = useNavigation()
  const route = useRoute()
  const { grupo } = route.params as RouteParams

  const hookStorage = useJogadores()
  const { RemoverGrupoPorNome } = useGrupos()

  const refJogador = useRef<TextInput>(null)

  const removerJogador = async (jogador: string) => {
    try {
      await hookStorage.RemoverJogadorPorGrupoETime(jogador, grupo)
      carregarJogadoresPorTime()
    } catch (error) {
      console.log(error)
      Alert.alert('Remover jogador', 'Não foi possivel remover o jogador')
    }
  }

  const handleAdicionarJogador = async () => {
    if (jogador.trim().length === 0)
      return Alert.alert('Novo jogador', 'Informe o nome do jogador para adicionar')

    const novoJogador: JogadoresDTO = {
      nome: jogador,
      time: time
    }

    try {

      await hookStorage.InserirJogadoresNoGrupo(novoJogador, grupo)
      carregarJogadoresPorTime()
      refJogador.current?.blur()
      setJogador('')

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo jogador', error.message)
      }
      else {
        Alert.alert('Novo jogador', 'Não foi possivel adicionar jogador')
        console.log(error)
      }
    }
  }

  const carregarJogadoresPorTime = async () => {
    try {
      setLoading(true)
      const data = await hookStorage.BuscarJogadoresPorGrupoETime(grupo, time)
      setJogadores(data)
      setLoading(false)
    } catch (error) {
      Alert.alert('Jogadores', 'Não foi possivel carregar jogadores do time selecionado')
      console.log(error)
    }
  }

  const removerGrupo = async () => {
    try {
      await RemoverGrupoPorNome(grupo)
      navigate.navigate('grupos')
    } catch (error) {
      console.log(error)
      Alert.alert('Remover turma', 'Não foi possivel remover a turma')
    }
  }

  const handleRemoverGrupo = async () => {
    Alert.alert(
      'Remover turma',
      'Deseja remover a turma?',
      [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: () => removerGrupo() },
      ]
    )
  }

  useEffect(() => {
    carregarJogadoresPorTime()
  }, [time])

  return (
    <Container>
      <Header showBackButton />
      <TextoDestaque titulo={grupo} subTitulo="adicione a galera e separe os times" />
      <Form>
        <InputText
          inputRef={refJogador}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          value={jogador}
          onChangeText={setJogador}
          onSubmitEditing={handleAdicionarJogador}
          returnKeyType="done"
        />
        <ButtonIcon icon='add' onPress={handleAdicionarJogador} />
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

      {loading ? <Loading /> :
        <FlatList
          data={jogadores}
          keyExtractor={item => item.nome}
          renderItem={({ item }) => (
            <CardJogador
              nome={item.nome}
              onRemove={() => removerJogador(item.nome)}
            />
          )}
          ListEmptyComponent={<ListEmpty mensagem={"Não há pessoas nesse time"} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            { paddingBottom: 50 },
            jogadores.length === 0 && { flex: 1 }
          ]}
        />

      }

      <Button
        titulo="Remover Turma"
        type={"SECONDARY"}
        onPress={handleRemoverGrupo}
      />
    </Container>
  )

}


//autoCorrect={false} serve para não aparecer auto correção de texto