//Comentário de linha
/*
Comentário de bloco 
Comentário de bloco 
Comentário de bloco 
*/

import * as React from 'react'; // Importa o React
import { StatusBar } from 'expo-status-bar';
// importando as dependencias importante do aplicativo que vamos utilizar 
import { View, Text, StyleSheet } from 'react-native';//Importa os componentes do RN
import { NavigationContainer } from '@react-navigation/native'; //Importa o container de navegação
import { createNativeStackNavigator} from '@react-navigation/native-stack'; //Importa o criador de navegação satack nativa 

//Definir os tipos de navegação e os parametros que as rotas podem aceitar (não teremos parametro)
type RootStackParamList = { 
  Home: undefined; // A rota Home não aceita parametros
}

//Criar uma isntancia do Stack Navigator utilizando os tipos definidos 
const Stack = createNativeStackNavigator<RootStackParamList>();

//Definie o compoente HomeScreen que será exibido na rota "Home"
const HomeScreen: React.FC = () => { 

  return (
    <View style={styles.container}>
      <Text style={styles.estilo}>Olá, Mundo!</Text> 
      <Text style={styles.estilao}>Olá, Verde!</Text>
      <Text style={styles.estilo}>Olá, Mundo!</Text>
      <Text style={styles.estilo}>Olá, Mundo!</Text>
      <Text style={styles.estilo}>Olá, Mundo!</Text>

      <StatusBar style="auto" />
    </View>

  );
};

//Definindo o componente principal do aplicativo
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Estilos para o commponente HomeScreen 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000ff',
  },
  estilo: {
    fontSize: 24,
    color: '#ED145b',
  },
  estilao: {
    fontSize: 24,
    color: '#14ed72ff',
  },

});
export default App;