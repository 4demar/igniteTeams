import { Container } from "./styles";
import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

type props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}

export function InputText({ inputRef, ...rest }: props) {
  //utilizar colors do thema
  const { COLORS } = useTheme()

  return (
    <Container
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  )
}