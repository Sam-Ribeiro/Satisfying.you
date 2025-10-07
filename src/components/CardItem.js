import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CardItem({title, subtitle, iconName, onPress}) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={title}>
      {iconName ? (
        <Icon name={iconName} size={36} color="#2B1D62" style={styles.icon} />
      ) : null}
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 140,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    margin: 10,
  },
  icon: {marginBottom: 8},
  title: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {fontSize: 12, color: '#6B7280', marginTop: 6, textAlign: 'center'},
});
