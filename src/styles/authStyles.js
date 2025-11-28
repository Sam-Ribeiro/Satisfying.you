import {StyleSheet, Platform} from 'react-native';

export const authStyles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#372775',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 32,
},

formWrapper: {
  width: '100%',
  alignSelf: 'stretch',
  paddingHorizontal: 32,
  paddingVertical: 6,
  backgroundColor: 'transparent',
},


  logo: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: -50,
    marginTop: -70,
  },

  formContent: {
    marginTop: -30,
    paddingTop: 0,
  },

  label: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 4,
    color: '#fff',
  },

  input: {
    width: '100%',
    height: 51,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 0,
  },

  buttonBase: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
    marginTop: 40,
  },

  buttonPrimary: {
    backgroundColor: '#37BD6D',
  },

  buttonSecondary: {
    backgroundColor: '#419ED7',
    height: 37,
  },

  buttonTertiary: {
    backgroundColor: '#B0CCDE',
    marginTop: 10,
    height: 37,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },

  row: {
    marginTop: 12,
    width: '100%',
    alignItems: 'center',
  },
});
