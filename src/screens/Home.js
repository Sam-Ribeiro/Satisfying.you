// src/screens/Home.js
import React, { useState, useEffect } from 'react';
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
import { initializeFirestore, collection, query, onSnapshot } from 'firebase/firestore';
import { app } from '../firebase/config';
import { useDispatch } from 'react-redux';
import { reducerSetPesquisa } from '../redux/pesquisaSlice';

export default function Home({ navigation }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const db = initializeFirestore(app, { experimentalForceLongPolling: true });
    const pesquisaCollection = collection(db, 'pesquisas');
    const q = query(pesquisaCollection);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const pesquisas = [];
      snapshot.forEach((doc) => {
        pesquisas.push({ id: doc.id, ...doc.data() });
      });
      setCardsData(pesquisas);
    }, (err) => {
      console.error('Erro ao escutar pesquisas:', err);
    });

    return () => unsubscribe();
  }, []);

  const filtered = cardsData.filter(item =>
    item.nome?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const dispatch = useDispatch()
  const abrirPesquisa = (item) =>{
    dispatch(
      reducerSetPesquisa({
        id: item.id, 
        nome: item.nome, 
        data: item.dataPesquisa, 
        imagem: item.imagem, 
        pessimo: item.pessimo,
        ruim: item.ruim, 
        neutro: item.neutro, 
        bom: item.bom, 
        excelente: item.excelente})
    )
    navigation.navigate('AcoesPesquisa')
  }

  const renderCard = ({ item }) => (
    <CardItem
      title={item.nome || ''}
      date={item.dataPesquisa || ''}
      image={item.imagem}
      onPress={() => abrirPesquisa(item)}
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
              data={filtered}
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
