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

export default function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Erro', 'Por favor preencha Email e Senha.');
      return;
    }

    navigation.replace('Home');
  };

  return (
    <KeyboardAvoidingView
      style={authStyles.container}
      behavior={Platform.select({ios: 'padding', android: undefined})}>
      <View style={authStyles.card}>
        <Text style={authStyles.title}>Cadastrar</Text>

        <Text style={authStyles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="seu@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
          style={authStyles.input}
          testID="register-email"
        />

        <Text style={authStyles.label}>Senha</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Senha"
          secureTextEntry
          style={authStyles.input}
          testID="register-password"
        />

        <TouchableOpacity
          style={authStyles.button}
          onPress={handleRegister}
          testID="register-btn">
          <Text style={authStyles.buttonText}>Criar conta</Text>
        </TouchableOpacity>

        <View style={authStyles.row}>
          <Text style={{color: '#fff'}}>Já tem conta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={authStyles.link}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
