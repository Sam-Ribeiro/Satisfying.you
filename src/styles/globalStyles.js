import { StyleSheet } from 'react-native'
import Relatorio from '../screens/Relatorio'
import { Image } from 'react-native-reanimated/lib/typescript/Animated'

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775',
    padding: 16,
  },
  text: {
    fontSize: 16,
    color: '#ffffffff',
  },
  header: {
    backgroundColor: '#2B1D62',
    color: '#FFFFFF'
  },
  acoesContainer:{
    display: 'flex',
    justifyContent:'center',
    flex: 1,
    backgroundColor: '#372775',
    padding: 50
  },
  relatorio:{
    backgroundColor: '#372775',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
  },
  image:{
    width: 240,
    height: 240
  },
  legend:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
})