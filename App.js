import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/screens/Login';
import Home from './src/screens/Home';
import AcoesPesquisa from './src/screens/AcoesPesquisa';
import Coleta from './src/screens/Coleta';
import Relatorio from './src/screens/Relatorio';
import RecuperarSenha from './src/screens/RecuperarSenha';
import Register from './src/screens/Register';
import NovaPesquisa from './src/screens/NovaPesquisa';
import ModificarPesquisa from './src/screens/ModificarPesquisa';
import AgradecimentoParticipacao from './src/screens/AgradecimentoParticipacao';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{ headerStyle: {backgroundColor: '#2B1D62'}, headerTintColor: '#fff'}}
                >
                    <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{headerShown: false}}
                    />
                    <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{headerShown: false}}
                    />
                    <Stack.Screen
                    name="Relatorio"
                    component={Relatorio}
                    />
                    <Stack.Screen
                    name="RecuperarSenha"
                    component={RecuperarSenha}
                    options={{title: 'Recuperar Senha'}}
                    />
                    <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{title: 'Cadastrar'}}
                    />
                    <Stack.Screen
                    name="Pesquisa"
                    component={NovaPesquisa}
                    options={{title: 'Nova Pesquisa'}}
                    />
                    <Stack.Screen
                    name="AcoesPesquisa"
                    component={AcoesPesquisa}
                    options={{title: 'Ações de Pesquisa'}}
                    />
                    <Stack.Screen
                    name="Coleta"
                    component={Coleta}
                    options={{headerShown: false}}
                    />
                    <Stack.Screen
                    name="Editar Pesquisa"
                    component={ModificarPesquisa}
                    options={{title: 'Modificar Pesquisa'}}
                    />
                    <Stack.Screen
                    name="AgradecimentoParticipacao"
                    component={AgradecimentoParticipacao}
                    options={{headerShown: false}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
