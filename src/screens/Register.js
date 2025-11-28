import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth_mod } from '../firebase/config';
import {authStyles} from '../styles/authStyles';

export default function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({ title: 'Nova Conta' });
  }, [navigation]);

  const handleRegister = async () => {
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      Alert.alert('Erro', 'Por favor preencha todos os campos.');
      return;
    }

    if (password !== passwordConfirm) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth_mod, email, password);
      setLoading(false);
      Alert.alert('Sucesso', 'Conta criada com sucesso. Faça login.');
      navigation.replace('Login');
    } catch (erro) {
      setLoading(false);
      console.log('erro ao criar usuario: ', erro);
      Alert.alert('Erro', 'Não foi possível criar a conta. Verifique os dados e tente novamente.');
    }
  };

  return (
    <View style={authStyles.container}>
      <KeyboardAvoidingView
        style={{flex: 1, width: '100%'}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView
          style={{flex: 1, width: '100%'}}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 16,
            paddingHorizontal: 10,
          }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={authStyles.formWrapper}>
            {}
            <Text style={authStyles.label}>Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="seu@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
              style={authStyles.input}
              testID="register-email"
              placeholderTextColor="#8b8b8b"
            />

            {}
            <Text style={authStyles.label}>Senha</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Senha"
              secureTextEntry
              style={authStyles.input}
              testID="register-password"
              placeholderTextColor="#8b8b8b"
            />

            {}
            <Text style={authStyles.label}>Repetir Senha</Text>
            <TextInput
              value={passwordConfirm}
              onChangeText={setPasswordConfirm}
              placeholder="Repita a senha"
              secureTextEntry
              style={authStyles.input}
              testID="register-password-confirm"
              placeholderTextColor="#8b8b8b"
            />

            {}
            <TouchableOpacity
              style={[authStyles.buttonBase, authStyles.buttonPrimary]}
              onPress={handleRegister}
              testID="register-btn"
              disabled={loading}
            >
              <Text style={authStyles.buttonText}>{loading ? 'CARREGANDO...' : 'CADASTRAR'}</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
