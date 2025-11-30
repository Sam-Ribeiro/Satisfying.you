// src/components/CardItem.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function CardItem({ title, date, image, onPress }) {
  const imageSource = image
    ? (typeof image === 'string' ? { uri: image } : image)
    : null;

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.9}
      onPress={onPress}
    >
      {imageSource ? (
        <Image source={imageSource} style={styles.image} resizeMode="cover" />
      ) : (
        <View style={styles.imagePlaceholder} />
      )}

      <Text style={styles.title}>{title}</Text>

      {date && <Text style={styles.date}>{date}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 2,
    marginHorizontal: 6,
    alignItems: 'center',
    elevation: 3,
  },
  image: {
    width: 140,
    height: 90,
    borderRadius: 8,
    marginBottom: 10,
  },
  imagePlaceholder: {
    width: 140,
    height: 90,
    borderRadius: 8,
    backgroundColor: '#E5E7EB',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
  },
  date: {
    marginTop: 6,
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
});
