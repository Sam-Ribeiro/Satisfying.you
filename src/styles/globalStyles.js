import { StyleSheet } from 'react-native'
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
  },
  formulario:{
    backgroundColor: '#372775',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button:{
    height: 30,
    width: '60%',
    backgroundColor: '#37BD6D',
    borderRadius: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    fontSize: 18,
    color: 'white',
  },
  deleteButton:{
    position: 'absolute',
    bottom: '5%',
    right: '5%'
  }
})