import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";

export default function App() {
  function alerta() {
    alert("Gol do Time Brasil");
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={{ fontSize: 60, fontWeight: 800 }}>Time Brasil</Text>
        <Image
          source={{
            uri: "https://i.pinimg.com/originals/38/31/8b/38318b039e70d19d539eb5cc054f11be.jpg",
          }}
          style={{
            height: 300,
            width: 300,
          }}
        />
        <Button title="Gol" onPress={alerta}></Button>
        <Text style={styles.text}>
          A Seleção Brasileira de Futebol é uma das equipes mais vitoriosas da história.
        </Text>
        <Text style={styles.text}>Mascote: o Fuleco (na Copa de 2014).</Text>
        <Text style={styles.text}>
          Títulos: O Brasil é o país com mais títulos da Copa do Mundo, com 5 conquistas (1958, 1962, 1970, 1994 e 2002).
        </Text>

        <Text style={styles.text}>
          O Brasil tem uma rica história no futebol, sendo conhecido mundialmente pela sua qualidade técnica e pelo jogo bonito.
        </Text>

        <Text style={styles.text}>
          Rivalidade: O Brasil tem uma grande rivalidade com países como Argentina, Uruguai e outros, com grandes jogos entre seleções sul-americanas.
        </Text>

        <Text style={styles.text}>
          Ídolos históricos: O Brasil produziu jogadores icônicos, como Pelé, Romário, Ronaldo Fenômeno, Zico, Rivaldo, e Neymar.
        </Text>

        <Text style={styles.text}>
          Torcida: A torcida brasileira é apaixonada pelo futebol e apoia incondicionalmente a Seleção em competições internacionais.
        </Text>

        <Text style={styles.text}>
          Estádio: O Brasil tem diversos estádios históricos, sendo o Maracanã, no Rio de Janeiro, o mais famoso.
        </Text>

        <Text style={styles.text}>
          Hino: O Hino Nacional Brasileiro é entoado com muito orgulho pelos torcedores e jogadores em todas as competições.
        </Text>

        <Text style={styles.text}>
          Maior artilheiro: Pelé é o maior artilheiro da história da Seleção Brasileira, com mais de 70 gols.
        </Text>

        <Text style={styles.text}>
          Maior goleada: O Brasil aplicou sua maior goleada na história ao vencer a seleção de El Salvador por 6 a 0.
        </Text>

        <Text style={styles.text}>
          Copa do Mundo invicta: O Brasil conquistou sua primeira Copa do Mundo em 1958 na Suécia, derrotando a França na final.
        </Text>

        <Text style={styles.text}>
          A Seleção Brasileira é bicampeã olímpica, com títulos conquistados nos Jogos Olímpicos de 2016 e 2020.
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Image
            source={{
              uri: "https://assets.goal.com/images/v3/blt5b148942f23012e9/WC_2026_Brazil.jpg?auto=webp&format=pjpg&width=3840&quality=60",
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Ronaldo_fenomeno.jpg/800px-Ronaldo_fenomeno.jpg",
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri: "https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/06/brasil.jpg",
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Zico_1982.jpg/800px-Zico_1982.jpg",
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Rivaldo_%28cropped%29.jpg/800px-Rivaldo_%28cropped%29.jpg",
            }}
            style={styles.image}
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  text: {
    textAlign: "left",
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    height: 150,
    width: 150,
    marginHorizontal: 5,
  },
});
