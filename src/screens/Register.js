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
  const [confirmError, setConfirmError] = useState('');

  useEffect(() => {
    navigation.setOptions({ title: 'Nova Conta' });
  }, [navigation]);

  const handleRegister = async () => {
    setConfirmError('');

    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      setConfirmError('Erro', 'Por favor preencha todos os campos.');
      return;
    }

    if (password !== passwordConfirm) {
      setConfirmError('O campo repetir senha difere da senha');
      return;
    }

    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth_mod, email, password);
      setLoading(false);
      navigation.replace('Login');
      setConfirmError('Sucesso', 'Conta criada com sucesso. Faça login.');
    } catch (erro) {
      setLoading(false);
      const code = erro?.code;
      if (code === 'auth/email-already-in-use') {
        setConfirmError('Este email já está em uso. Faça login ou use outro email.');
      } else if (code === 'auth/invalid-email') {
        setConfirmError('O formato do email é inválido.');
      } else if (code === 'auth/weak-password') {
        setConfirmError('Senha fraca. Use pelo menos 6 caracteres.');
      } else {
        setConfirmError('Não foi possível criar a conta. Tente novamente mais tarde.');
      }
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
            <Text style={authStyles.label}>Email</Text>
            <TextInput
              value={email}
              onChangeText={(t) => {
                setEmail(t);
                if (confirmError) {setConfirmError('');}
              }}
              placeholder="seu@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
              style={authStyles.input}
              testID="register-email"
              placeholderTextColor="#8b8b8b"
            />

            <Text style={authStyles.label}>Senha</Text>
            <TextInput
              value={password}
              onChangeText={(t) => {
                setPassword(t);
              }}
              placeholder="Senha"
              secureTextEntry
              style={authStyles.input}
              testID="register-password"
              placeholderTextColor="#8b8b8b"
            />

            <Text style={authStyles.label}>Repetir Senha</Text>
            <TextInput
              value={passwordConfirm}
              onChangeText={(t) => {
                setPasswordConfirm(t);
                if (confirmError) {setConfirmError('');}
              }}
              placeholder="Repita a senha"
              secureTextEntry
              style={[authStyles.input, confirmError ? authStyles.inputErrorBorder : null]}
              testID="register-password-confirm"
              placeholderTextColor="#8b8b8b"
            />

            {confirmError ? <Text style={authStyles.errorText}>{confirmError}</Text> : null}

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
