

import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background} ;
  padding: 8px 24px 24px 24px;
`

export const Card = styled.View`
  margin-top: 24px;
  flex-direction: row; 
  justify-content: center;
  gap: 16px;
`
export const ItemCard = styled(TouchableOpacity)`
  flex-direction: column;
  align-items: center;
`
export const ImgTheme = styled.Image`
  margin-bottom: 8px;
  width: 100px;
  height: 120px;
`