import { TouchableOpacityProps } from "react-native";
import { Enum_Prioridade } from "src/Utils";
import { Container, Icon } from "./styles";
import { MaterialIcons } from '@expo/vector-icons'

type props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap,
  type?: Enum_Prioridade
}

export function ButtonIcon({ icon, type = Enum_Prioridade.primary, ...rest }: props) {

  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  )

}