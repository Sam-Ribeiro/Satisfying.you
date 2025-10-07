import {StyleSheet} from 'react-native';

export const sideMenuStyles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#372775',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  menuButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#1A1460',
    borderRadius: 8,
    width: 80,
    alignItems: 'center',
  },
  menuButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  sideMenu: {
    backgroundColor: '#1A1460',
    paddingTop: 60,
  },
  menuItem: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomColor: '#372775',
    borderBottomWidth: 1,
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
  },
});
