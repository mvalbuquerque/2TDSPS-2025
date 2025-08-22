//Mostrar como faz para ajustar a home não esquecer de dar o reset no projeto.

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente principal da tela
export default function Index() {
  return (
    <View style={styles.container}>
      {/* Texto de boas-vindas */}
      <Text style={styles.text}>Bem-vindo ao React Native!</Text>
    </View>
  );
}

// Estilos da tela
const styles = StyleSheet.create({
  // Estilo do container principal
  container: {
    flex: 1, // Ocupar todo o espaço disponível
    justifyContent: 'center', // Centralizar verticalmente
    alignItems: 'center', // Centralizar horizontalmente
    backgroundColor: '#f0f0f0', // Cor de fundo do container
  },
  // Estilo do texto
  text: {
    fontSize: 24, // Tamanho grande para o texto
    fontWeight: 'bold', // Deixar o texto em negrito
    color: '#007BFF', // Azul para destacar o texto
    backgroundColor: '#ffffff', // Fundo branco para o texto
  },
});
