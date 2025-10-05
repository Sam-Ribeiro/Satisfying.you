import { StyleSheet } from 'react-native'
import { red } from 'react-native-reanimated/lib/typescript/Colors'

export const coletaStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40
  },
  text: {
    fontSize: 26,
    color: '#ffffffff',
    fontFamily: 'Averia Libre',
    fontWeight: '400'
  },
  header: {
    backgroundColor: '#2B1D62',
    color: '#FFFFFF'
  },
  feedback:{
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  coleta:{
    flex: 1,
    backgroundColor: '#372775',
    padding: 16,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 60,
  }
})