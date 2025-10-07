import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import SideMenu from '../components/SideMenu';
import CardItem from '../components/CardItem';
import {homeStyles} from '../styles/homeStyles';

export default function Home({navigation}) {
  const cardsData = [
    {id: '1', title: 'SECOMP'},
    {id: '2', title: 'UBUNTU'},
    {id: '3', title: 'MENINAS CPU'},
  ];

  const renderCard = ({item}) => (
    <CardItem title={item.title} style={homeStyles.cardFlutuante} />
  );

  return (
    <SideMenu navigation={navigation}>
      <SafeAreaView style={{flex: 1, padding: 16}}>
        <Text style={homeStyles.sectionTitle}>Categorias</Text>
        <FlatList
          data={cardsData}
          keyExtractor={item => item.id}
          renderItem={renderCard}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={homeStyles.cardsList}
        />

        <TouchableOpacity
          style={homeStyles.newButton}
          onPress={() => navigation.navigate('Pesquisa')}>
          <Text style={homeStyles.newButtonText}>NOVA PESQUISA</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SideMenu>
  );
}
