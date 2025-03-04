import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type filtroProps = {
  ativo?: boolean
}

export const Container = styled(TouchableOpacity) <filtroProps>`
  ${({ theme, ativo }) => ativo && css`
    border: 1px solid ${theme.COLORS.GREEN_700};
  `} 
  border-radius: 4px;
  margin-right: 12px;
  height: 38px;
  width: 70px;
  align-items: center;
  justify-content: center;
`;

export const Titulo = styled.Text`
  text-transform: uppercase;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `} 
`;