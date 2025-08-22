// isso é um comentário de linha
/*
isso é um comentário em bloco 
*/

//Importando os módulos necessários do React e React Native
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


// Definindo o componente App
// Este componente renderiza uma mensagem de boas-vindas
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá! Bem Vindo(a) ao React Native!</Text>
    </View>
  );
};

// estilos para o componente
// Define o layout e a aparência do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Centraliza o conteúdo
    backgroundColor: '#f0f0f0', // Cor de fundo cinza claro
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default App;
