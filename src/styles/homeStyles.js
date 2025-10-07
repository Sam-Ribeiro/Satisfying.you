import {StyleSheet} from 'react-native';

export const homeStyles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#372775',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#1A1460',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  headerButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#372775',
    borderRadius: 8,
  },
  headerButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  main: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  cardsList: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  cardFlutuante: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    minWidth: 120,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  newButton: {
    backgroundColor: '#F1CE7E',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  newButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
});
