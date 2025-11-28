import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#372775',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 12,
  },
cardFlutuante: {
  backgroundColor: '#fff',
  padding: 10,
  borderRadius: 12,
  minWidth: 120,
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 3,
},

  newButton: {
    backgroundColor: '#37BD6D',
    paddingVertical: 8,
    alignItems: 'center',
    marginTop: 1,
  },
  newButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  searchBar: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    color: '#000',
    fontSize: 16,
    marginBottom: 1,
    alignSelf: 'stretch',
  },
});
