import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { TextoDestaque } from "@components/TextoDestaque";
import { Button } from "@components/Button";
import { InputText } from "@components/InputText";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useGrupos } from "@storage/grupos/useGrupos";
import { AppError } from "@utils/appError";
import { Alert } from "react-native";

export default function NovoGrupo() {
  const [nomeGrupo, setNomeGrupo] = useState('')
  const navigation = useNavigation()
  const { CriarGrupo } = useGrupos()

  const handleCriarGrupo = async () => {
    try {
      if (nomeGrupo.trim().length === 0) {
        return Alert.alert('Novo grupo', 'Informe o nome da turma.')
      }

      await CriarGrupo(nomeGrupo)
      navigation.navigate('jogadores', { grupo: nomeGrupo })

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo grupo', error.message)
      }
      else {
        Alert.alert('Novo grupo', 'Não foi possivel criar novo grupo')
        console.log(error)
      }
    }
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