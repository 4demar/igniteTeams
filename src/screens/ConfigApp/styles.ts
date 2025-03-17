

import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.color.background} ;
  padding: 24px;
`

export const Titulo = styled.Text`
  color: #fff;
  font-size: 25px;
  color: ${({ theme }) => theme.color.textPrimary} ;
`

export const SubTitulo = styled.Text`
  color: #fff;
  font-size: 25px;
  color: ${({ theme }) => theme.color.textSecondary} ;
`

export const Card = styled.Text`
  color: #fff;
  font-size: 25px;
  color: ${({ theme }) => theme.color.textPrimary} ;
`

export const ItemCard = styled.Text`
  color: #fff;
  font-size: 25px;
  color: ${({ theme }) => theme.color.textSecondary} ;
`