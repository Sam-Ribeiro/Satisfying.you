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
  Dimensions,
} from 'react-native';

import {authStyles} from '../styles/authStyles';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth_mod } from '../firebase/config';

export default function RecuperarSenha({navigation}) {
  const [email, setEmail] = useState('');

  useEffect(() => {
    navigation.setOptions({ title: 'Recuperação de senha' });
  }, [navigation]);

  const handleRecover = () => {
    if (!email.trim()) {
      Alert.alert('Erro', 'Por favor insira o Email.');
      return;
    }
    sendPasswordResetEmail(auth_mod, email)
      .then(()=> {
        Alert.alert('Sucesso', 'Email de redefinição de senha enviado. Verifique sua caixa de entrada.');
      })
      .catch((erro)=>{
        console.log('erro ao enviar Email de redefinição de senha: ' + JSON.stringify(erro));
        Alert.alert('Erro', 'Não foi possível enviar o email. Tente novamente mais tarde.');
      });
  };

  const { width, height } = Dimensions.get('window');

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
              testID="recover-email"
              placeholderTextColor="#8b8b8b"
            />

            {}
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
