import React, {useState} from 'react';
import { View, Text,TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert, ScrollView, Dimensions,} from 'react-native';
import {authStyles} from '../styles/authStyles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth_mod } from '../firebase/config';
import { useDispatch } from 'react-redux';
import { reducerSetLogin } from '../redux/loginSlice';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()

  const validateAndLogin = () => {
    signInWithEmailAndPassword(auth_mod,email,password)
      .then((userCredential)=>{
        console.log("usuario logado com sucesso: "+ JSON.stringify(userCredential))

        dispatch(reducerSetLogin({email: email, password: password}))

        navigation.replace('Home');
      })
      .catch((erro) =>{
        console.log("erro ao autenticar usuario: "+ JSON.stringify(erro))
      })
  };

  const {width, height} = Dimensions.get('window');

  return (
    <KeyboardAvoidingView
      style={authStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        contentContainerStyle={{
          minHeight: height,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 16,
          paddingHorizontal: 16,
        }}
        keyboardShouldPersistTaps="handled">
        <View style={[authStyles.card, {width: width * 0.7}]}>
          <Text style={authStyles.title}>Entrar</Text>

          <Text style={authStyles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="seu@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
            style={authStyles.input}
            testID="login-email"
          />

          <Text style={authStyles.label}>Senha</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Senha"
            secureTextEntry
            style={authStyles.input}
            testID="login-password"
          />

          {/* */}
          <View style={{width: '100%', alignItems: 'flex-end', marginTop: 8}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('RecuperarSenha')}>
              <Text
                style={{
                  color: authStyles.link.color || '#F1CE7E',
                  fontWeight: '600',
                }}>
                Esqueci minha senha
              </Text>
            </TouchableOpacity>
          </View>

          {/* */}
          <TouchableOpacity
            style={[authStyles.button, {alignSelf: 'center'}]}
            onPress={validateAndLogin}
            testID="login-btn">
            <Text style={authStyles.buttonText}>Acessar</Text>
          </TouchableOpacity>

          <View style={authStyles.row}>
            <Text style={{color: '#fff'}}>Não tem conta? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={authStyles.link}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
