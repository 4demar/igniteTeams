import { TouchableOpacity } from "react-native";
import { Enum_Prioridade } from "src/Utils";
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'

//export type ButtonIconTypeStyleProps = "primary" | "secondary"

type props = {
  type: Enum_Prioridade

}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  /* margin: ; */
`

export const Icon = styled(MaterialIcons).attrs<props>(({ theme, type }) => ({
  size: 24,
  color: type === Enum_Prioridade.primary ? theme.COLORS.GREEN_700 : theme.COLORS.RED
}))``