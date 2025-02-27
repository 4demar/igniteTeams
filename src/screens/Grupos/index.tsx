import { Header } from '@components/Header';
import { Container, Titulo } from './styles';
import { TextoDestaque } from '@components/TextoDestaque';
import { CardGrupo } from '@components/CardGrupo';
import { useState } from 'react';
import { FlatList, Text } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export default function Grupos() {
  const [grupos, setGrupos] = useState<string[]>([])


  return (
    <Container>
      <Header />
      <TextoDestaque
        titulo='Turmas'
        subTitulo='joque com a sua turma'
      />

      <FlatList
        data={grupos}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CardGrupo
            titulo={item}
          />
        )}
        contentContainerStyle={grupos.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty mensagem='Que tal cadastrar a primeira turma?' />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button
        titulo='Criar nova turma'
      />
    </Container>
  );
}
