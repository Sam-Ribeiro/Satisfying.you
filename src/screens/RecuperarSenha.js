import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

import {authStyles} from '../styles/authStyles';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth_mod } from '../firebase/config';

export default function RecuperarSenha({navigation}) {
  const [email, setEmail] = useState('');

  const handleRecover = () => {
    if (!email.trim()) {
      Alert.alert('Erro', 'Por favor insira o Email.');
      return;
    }
    sendPasswordResetEmail(auth_mod,email)
      .then(()=> {
        console.log("Email de redefinição de senha enviado com sucesso, verifique sua caixa de entrada")
      })
      .catch((erro)=>{
        console.log("erro ao enviar Email de redefinição de senha: "+ JSON.stringify(erro))
      }) 
  };

  return (
    <KeyboardAvoidingView
      style={authStyles.container}
      behavior={Platform.select({ios: 'padding', android: undefined})}>
      <View style={authStyles.card}>
        <Text style={authStyles.title}>Recuperar Senha</Text>

        <Text style={authStyles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="seu@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
          style={authStyles.input}
          testID="recover-email"
        />

        <TouchableOpacity
          style={authStyles.button}
          onPress={handleRecover}
          testID="recover-btn">
          <Text style={authStyles.buttonText}>Recuperar</Text>
        </TouchableOpacity>

        <View style={authStyles.row}>
          <Text style={{color: '#fff'}}>Lembrou a senha? </Text>
          <TouchableOpacity onPress={() => navigation.replace('Login')}>
            <Text style={authStyles.link}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
