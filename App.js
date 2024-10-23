import React from "react";
import { View, Text, TextInput, TouchableOpacity,StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-web";

const LoginScreen = () => {
  return (
  <SafeAreaView style={styles.background}>
    <View style={styles.container}>
      <image
       source={{ uri: 'iconpink.png'}}
       style={styles.logo}
       />
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        placeholder="Login"
        placeholderTextColor="003f5c"
      />
    </View>
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        placeholder="Senha"
        placeholderTextColor="003f5c"
        secureTextEntry={true}
      />
    </View>
        <TouchableOpacity style={styles.loginBnt}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.cadastroText}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBotton: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
  },
  inputText: {
    height: 50,
    color: 'black',
    flex: 1,
    borderColor: 'black',
  },
  loginBnt: {
    width: '80%',
    backgroundColor: '#ff0080',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color:'white',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: '#f5f5dc',
  },
});

export default LoginScreen;
