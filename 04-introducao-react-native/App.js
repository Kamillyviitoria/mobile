
//IMPORTS 

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

// FUNÇÃO QUE DEFINE O COMPONENTE 
// RETORNAR O QUE VAI SER RENDERIZADO NA TELA 
export default function App() {
// LOGICA DO MEU COMPONENTE
const nome = "Kamilly"
function alerta(){
  alert("Clicou no botão")
}
  // RETORNO COM O JSX 
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image  
      source={{
         uri: "https://i.pinimg.com/736x/74/2b/af/742baf3703a85160c3f666fd1ff5e045.jpg"
      }}

      style={{
        height: 400,
        width: 400
      }}            
      />
           <Image  
      source={{
         uri: "https://i.pinimg.com/736x/74/2b/af/742baf3703a85160c3f666fd1ff5e045.jpg"
      }}

      style={{
        height: 400,
        width: 400
      }}            
      />
      <Text>TEXTO</Text>
      <Text>Bem-Vindo</Text>
      <Text>{2 + 2}</Text>
      <Button title='Clicar' onPress={alerta}></Button>

    </View>
  );
}

// ESTILOS 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
