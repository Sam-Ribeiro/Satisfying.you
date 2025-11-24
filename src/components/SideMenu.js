import React, {useRef, useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions, TouchableWithoutFeedback, FlatList } from 'react-native';
import {sideMenuStyles} from '../styles/sideMenu';
import { query, collection, initializeFirestore, onSnapshot } from "firebase/firestore";
import { app } from "../firebase/config";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { reducerSetPesquisa } from '../redux/pesquisaSlice';

export default function SideMenu({navigation, children}) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const widthAnim = useRef(new Animated.Value(0)).current;
  const screenWidth = Dimensions.get('window').width;

  const email = useSelector((state) => state.login.email) 

  const toggleMenu = () => {
    if (!open) {
      setVisible(true);
      Animated.timing(widthAnim, {
        toValue: 0.6 * screenWidth,
        duration: 250,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(widthAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }).start(() => setVisible(false));
    }
    setOpen(!open);
  };

  const navigateTo = route => {
    navigation.navigate(route);
    toggleMenu();
  };

  const logout = () => {
    navigation.replace('Login');
    toggleMenu();
  };

  //firebase muda dps, isso é so pra carregar VVVVV

  const db = initializeFirestore(app, {experimentalForceLongPolling: true})
  const pesquisaCollection = collection(db, "pesquisas")
  const [ListaPesquisas, setListaPesquisas] = useState()
  useEffect ( () => {
    const q = query(pesquisaCollection)

    const unsubscribe = onSnapshot(q, (snapshot)=>{
      const pesquisas = []
      snapshot.forEach( (doc) => {
        pesquisas.push({
          id: doc.id,
          ...doc.data()
        })
      })
      
      setListaPesquisas(pesquisas)
    })
  }, [])
  const dispatch = useDispatch()
  const abrirPesquisa = (item) =>{
    dispatch(reducerSetPesquisa({id: item.id, nome: item.nome, data: item.dataPesquisa, imagem: item.imagem}))
    navigation.navigate('Editar Pesquisa')
  }

  const itemPesquisa = ({item}) =>{
    return(
      <TouchableOpacity style={{backgroundColor:"#fff"}} onPress={() => abrirPesquisa(item)}>
        <Text>Id: {item.id} Nome: {item.nome} Data: {item.dataPesquisa}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{flex: 1}}>
      <View style={sideMenuStyles.header}>
        <TouchableOpacity
          onPress={toggleMenu}
          style={sideMenuStyles.menuButton}>
          <Text style={sideMenuStyles.menuButtonText}>Menu</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1}}>{children}</View>

      {open && (
        <TouchableWithoutFeedback onPress={toggleMenu}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.3)',
              zIndex: 5,
            }}
          />
        </TouchableWithoutFeedback>
      )}

      {visible && (
        <Animated.View
          style={[
            sideMenuStyles.sideMenu,
            {
              width: widthAnim,
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              zIndex: 10,
            },
          ]}>
          <TouchableOpacity
            onPress={() => navigateTo('AcoesPesquisa')}
            style={sideMenuStyles.menuItem}>
            <Text style={sideMenuStyles.menuText}>Pesquisas</Text>
          </TouchableOpacity>
          {/*  Exibindo os itens do db EXEMPLO!!!!!*/}
          <View>
            <FlatList data={ListaPesquisas} renderItem={itemPesquisa} keyExtractor={pesquisa => pesquisa.id}></FlatList>
          </View>
          {/*  Exibindo os itens do db EXEMPLO!!!!! e abaixo o email do usuario logado*/}
          <Text style={sideMenuStyles.menuText}>{email}</Text>
          <TouchableOpacity onPress={logout} style={sideMenuStyles.menuItem}>
            <Text style={sideMenuStyles.menuText}>Sair</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
      
    </View>
  );
}
