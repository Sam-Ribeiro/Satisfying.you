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
} from 'react-native';

import {authStyles} from '../styles/authStyles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth_mod } from '../firebase/config';
import { useDispatch } from 'react-redux';
import { reducerSetLogin } from '../redux/loginSlice';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const validateAndLogin = () => {
    signInWithEmailAndPassword(auth_mod, email, password)
      .then((userCredential) => {
        console.log('usuario logado com sucesso: ' + JSON.stringify(userCredential));
        dispatch(reducerSetLogin({email: email, password: password}));
        navigation.replace('Home');
      })
      .catch((erro) => {
        console.log('erro ao autenticar usuario: ' + JSON.stringify(erro));
      });
  };

  const {width, height} = Dimensions.get('window');
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

            {}
            <Image
              source={require('../assets/images/logo.png')}
              style={[
                authStyles.logo,
                { width: logoSize, height: logoSize },
              ]}
              resizeMode="contain"
            />

            {}
            <View style={authStyles.formContent}>

              {}
              <Text style={authStyles.label}>Email</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="seu@email.com"
                keyboardType="email-address"
                autoCapitalize="none"
                style={authStyles.input}
                testID="login-email"
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
                testID="login-password"
                placeholderTextColor="#8b8b8b"
              />

              {}
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

            </View>{}

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
