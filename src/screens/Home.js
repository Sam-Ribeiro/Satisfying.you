import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import SideMenu from '../components/SideMenu';
import CardItem from '../components/CardItem';
import { homeStyles } from '../styles/homeStyles';

export default function Home({ navigation }) {
  const [searchTerm, setSearchTerm] = useState('');

  const cardsData = [
    { id: '1', title: 'SECOMP' },
    { id: '2', title: 'UBUNTU' },
    { id: '3', title: 'MENINAS CPU' },
  ];

  const renderCard = ({ item }) => (
    <CardItem title={item.title} style={homeStyles.cardFlutuante} />
  );

  return (
    <SideMenu navigation={navigation}>
      <SafeAreaView style={homeStyles.safe}>
        <View style={{ padding: 16, flex: 1 }}>
          {}
          <TextInput
            style={homeStyles.searchBar}
            placeholder="Insira o termo de busca..."
            placeholderTextColor="#8B8B8B"
            value={searchTerm}
            onChangeText={setSearchTerm}
          />

          <FlatList
            data={cardsData}
            keyExtractor={(item) => item.id}
            renderItem={renderCard}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 12, paddingVertical: 8 }}
          />

          <TouchableOpacity
            style={homeStyles.newButton}
            onPress={() => navigation.navigate('Pesquisa')}
          >
            <Text style={homeStyles.newButtonText}>NOVA PESQUISA</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SideMenu>
  );
}
