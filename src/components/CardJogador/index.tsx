import { ButtonIcon } from "@components/ButtonIcon"
import { Container, Icon, Nome } from "./styles"
import { Enum_Prioridade } from "@utils/index"

type props = {
  nome: string
  onRemove: () => void
}

export function CardJogador({ nome, onRemove }: props) {

  return (
    <Container>
      <Icon name="person"></Icon>
      <Nome>{nome}</Nome>
      <ButtonIcon
        icon="close"
        type={Enum_Prioridade.secondary}
        onPress={onRemove}
      />
    </Container>
  )

}