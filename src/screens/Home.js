import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import SideMenu from '../components/SideMenu';
import CardItem from '../components/CardItem';
import { homeStyles } from '../styles/homeStyles';

export default function Home({ navigation }) {
  const [searchTerm, setSearchTerm] = useState('');

  const cardsData = [
    { id: '1', title: 'SECOMP', date: '10/11/2025', image: require('../assets/images/card1.png') },
  ];

  const renderCard = ({ item }) => (
    <CardItem
      title={item.title}
      date={item.date}
      image={item.image}
      onPress={() => navigation.navigate('Pesquisa', { id: item.id })}
    />
  );

  return (
    <SideMenu navigation={navigation}>
      <SafeAreaView style={homeStyles.safe}>
        <View style={{ flex: 1, padding: 16 }}>

          <TextInput
            style={homeStyles.searchBar}
            placeholder="Insira o termo de busca..."
            placeholderTextColor="#8B8B8B"
            value={searchTerm}
            onChangeText={setSearchTerm}
          />

          <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList
              data={cardsData}
              keyExtractor={(item) => item.id}
              renderItem={renderCard}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingVertical: 8, gap: 12 }}
            />

            <TouchableOpacity
              style={homeStyles.newButton}
              onPress={() => navigation.navigate('Pesquisa')}
            >
              <Text style={homeStyles.newButtonText}>NOVA PESQUISA</Text>
            </TouchableOpacity>

          </ScrollView>

        </View>
      </SafeAreaView>
    </SideMenu>
  );
}
