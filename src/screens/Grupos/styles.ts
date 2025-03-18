
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background} ;
  padding: 8px 24px 24px 24px;
`

export const Titulo = styled.Text`
  color: #fff;
  font-size: 25px;

`