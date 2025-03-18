
import { CaretLeft, Gear } from 'phosphor-react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`
export const BackButton = styled.TouchableOpacity`
  flex: 1;
`

export const SettingsButton = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
`

export const SettingsIcon = styled(Gear).attrs(({ theme }) => ({
  color: theme.COLORS.textPrimary,
  size: 32
}))``

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  color: theme.COLORS.textPrimary,
  size: 32
}))``