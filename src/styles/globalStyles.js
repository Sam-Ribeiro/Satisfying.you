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
    width: 400,
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
  },
  hidden:{
    display: 'none'
  },
  popup:{
    backgroundColor: '#2B1F5C',
    height: 150,
    width: 350,
    position: 'absolute',
    padding: 30, 
  },
  buttonConfirmDelete:{
    backgroundColor: '#FF8383',
    color: '#fff',
    padding: 5,
    width: 130,
    display: 'flex',
    alignItems: 'center'
  },
  buttonCancelDelete:{
    backgroundColor: '#3F92C5',
    color: '#fff',
    padding: 5,
    width: 130, 
    display: 'flex',
    alignItems: 'center'
  },
  backdrop: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer:{
    display: 'flex',
    flexDirection:'row',
    margin: 10,
    justifyContent: 'space-around'
  }
})