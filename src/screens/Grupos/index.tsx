import { useState, useCallback } from 'react';
import { Alert, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useGrupos } from '@storage/grupos/useGrupos';
import { Header } from '@components/Header';
import { TextoDestaque } from '@components/TextoDestaque';
import { CardGrupo } from '@components/CardGrupo';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { Container } from './styles';
import { Loading } from '@components/Loading';

export default function Grupos() {
  const [loading, setLoading] = useState(true)
  const [grupos, setGrupos] = useState<string[]>([])
  const navigation = useNavigation()
  const { BuscarGrupos } = useGrupos()

  const handleNovoGrupo = () => {
    navigation.navigate('novoGrupo')
  }

  const carregarGrupos = async () => {
    try {
      setLoading(true)
      const data = await BuscarGrupos()
      setGrupos(data)
    } catch (error) {
      Alert.alert('Turmas', 'Não foi possivel buscar as turmas')
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }

  const abrirGrupo = (grupo: string) => {
    navigation.navigate('jogadores', { grupo })
  }

  useFocusEffect(useCallback(() => {
    carregarGrupos();
  }, []))

  return (
    <Container>
      <Header />
      <TextoDestaque
        titulo='Turmas'
        subTitulo='joque com a sua turma'
      />
      {loading ? <Loading /> :
        <FlatList
          data={grupos}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <CardGrupo
              titulo={item}
              onPress={() => abrirGrupo(item)}
            />
          )}
          contentContainerStyle={grupos.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <ListEmpty mensagem='Que tal cadastrar a primeira turma?' />
          )}
          showsVerticalScrollIndicator={false}
        />
      }

      <Button
        titulo='Criar nova turma'
        onPress={handleNovoGrupo}
      />
    </Container>
  );
}
