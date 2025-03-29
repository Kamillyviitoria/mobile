import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function Serie(props) {
  const { nome, ano, diretor, temporadas, capa } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Série</Text>
      <Text style={styles.texto}>Nome: {nome}</Text>
      <Text style={styles.texto}>Ano de Lançamento: {ano}</Text>
      <Text style={styles.texto}>Diretor: {diretor}</Text>
      <Text style={styles.texto}>Temporadas: {temporadas}</Text>

      <Image
        source={{
          uri: capa,
        }}
        style={{
          height: 300,
          width: 300,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    header: {
      backgroundColor: 'red',
      fontSize: 30,
      fontWeight: 600,
      textAlign: 'center',
      paddingTop: 30
    }
  });