import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
  Image,
  Alert,
} from 'react-native';

import {authStyles} from '../styles/authStyles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth_mod } from '../firebase/config';
import { useDispatch } from 'react-redux';
import { reducerSetLogin } from '../redux/loginSlice';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [credentialError, setCredentialError] = useState('');
  const dispatch = useDispatch();

  const validateAndLogin = () => {

    setCredentialError('');

    if (!email.trim() || !password.trim()) {
      setCredentialError('Por favor preencha email e senha.');
      return;
    }

    signInWithEmailAndPassword(auth_mod, email, password)
      .then((userCredential) => {
        dispatch(reducerSetLogin({email: email, password: password}));
        navigation.replace('Home');
      })
      .catch((erro) => {
        const code = erro?.code;
        if (code === 'auth/wrong-password' || code === 'auth/user-not-found' || code === 'auth/invalid-email') {
          setCredentialError('E-mail e/ou senha inválidos');
        } else {
          Alert.alert('Não foi possível autenticar. Tente novamente mais tarde.');
        }
      });
  };

  const {width} = Dimensions.get('window');
  const logoSize = Math.min(260, width * 0.6);

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
            paddingVertical: 16,
            alignItems: 'center',
          }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={authStyles.formWrapper}>

            <Image
              source={require('../assets/images/logo.png')}
              style={[
                authStyles.logo,
                { width: logoSize, height: logoSize },
              ]}
              resizeMode="contain"
            />

            <View style={authStyles.formContent}>
              <Text style={authStyles.label}>Email</Text>
              <TextInput
                value={email}
                onChangeText={(t) => {
                  setEmail(t);
                  if (credentialError) {setCredentialError('');}
                }}
                placeholder="seu@email.com"
                keyboardType="email-address"
                autoCapitalize="none"
                style={authStyles.input}
                testID="login-email"
                placeholderTextColor="#8b8b8b"
              />

              <Text style={authStyles.label}>Senha</Text>
              <TextInput
                value={password}
                onChangeText={(t) => {
                  setPassword(t);
                  if (credentialError) {setCredentialError('');}
                }}
                placeholder="Senha"
                secureTextEntry
                style={[authStyles.input, credentialError ? authStyles.inputErrorBorder : null]}
                testID="login-password"
                placeholderTextColor="#8b8b8b"
              />

              {credentialError ? <Text style={authStyles.errorText}>{credentialError}</Text> : null}

              <TouchableOpacity
                style={[authStyles.buttonBase, authStyles.buttonPrimary]}
                onPress={validateAndLogin}
                testID="login-btn"
              >
                <Text style={authStyles.buttonText}>Entrar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[authStyles.buttonBase, authStyles.buttonSecondary]}
                onPress={() => navigation.navigate('Register')}
                testID="create-account-btn"
              >
                <Text style={authStyles.buttonText}>Criar minha conta</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[authStyles.buttonBase, authStyles.buttonTertiary]}
                onPress={() => navigation.navigate('RecuperarSenha')}
                testID="forgot-password-btn"
              >
                <Text style={authStyles.buttonText}>Esqueci minha senha</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
