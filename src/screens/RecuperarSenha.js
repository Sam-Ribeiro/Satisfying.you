import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';

import {authStyles} from '../styles/authStyles';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth_mod } from '../firebase/config';

export default function RecuperarSenha({navigation}) {
  const [email, setEmail] = useState('');
  const [emailFieldError, setEmailFieldError] = useState('');

  useEffect(() => {
    navigation.setOptions({ title: 'Recuperação de senha' });
  }, [navigation]);

  const handleRecover = () => {
    setEmailFieldError('');

    if (!email.trim()) {
      setEmailFieldError('Por favor insira o Email.');
      return;
    }

    sendPasswordResetEmail(auth_mod, email)
      .then(()=> {
        Alert.alert('Sucesso', 'Email de redefinição de senha enviado. Verifique sua caixa de entrada.');
      })
      .catch((erro)=>{
        const code = erro?.code;
        if (code === 'auth/user-not-found' || code === 'auth/invalid-email') {
          setEmailFieldError('E-mail parece ser inválido');
        } else {
          Alert.alert('Erro', 'Não foi possível enviar o email. Tente novamente mais tarde.');
        }
      });
  };

  const { width } = Dimensions.get('window');

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
                if (emailFieldError) {setEmailFieldError('');}
              }}
              placeholder="seu@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
              style={[authStyles.input, emailFieldError ? authStyles.inputErrorBorder : null]}
              testID="recover-email"
              placeholderTextColor="#8b8b8b"
            />

            {emailFieldError ? <Text style={authStyles.errorText}>{emailFieldError}</Text> : null}

            <TouchableOpacity
              style={[authStyles.buttonBase, authStyles.buttonPrimary]}
              onPress={handleRecover}
              testID="recover-btn"
            >
              <Text style={authStyles.buttonText}>RECUPERAR</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
