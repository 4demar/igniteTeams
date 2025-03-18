import { TouchableOpacity } from "react-native"
import styled, { css } from "styled-components/native"
import { UsersThree } from "phosphor-react-native"

// colocando TouchableOpacity é passado as propriedades para o style Container
export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  background-color: ${({ theme }) => theme.COLORS.backgroundCard};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  margin-bottom: 12px;
`

export const Titulo = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.textSecondary};
  `};
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.greenDark,
  weight: 'fill'
}))`
  margin-right: 20px;
`
