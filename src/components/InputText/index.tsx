import { Container } from "./styles";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

export function InputText({ ...rest }: TextInputProps) {
  //utilizar colors do thema
  const { COLORS } = useTheme()

  return (
    <Container
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  )
}