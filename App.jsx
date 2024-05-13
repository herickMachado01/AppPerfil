import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cardPerfil}>
        <Image 
          source="https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png"
          style={styles.imgPerfil}
        />       
      </View>

      <Text style={{fontSize: 30}}>Herick Machado </Text>

      <View style={styles.cardSobre}>
        <View>
          <Text>Fotos</Text>
          <EvilIcons name="image" size={44} color="#0b83a4" />
        </View>
        <View>
          <Text>Amigos</Text>
          <EvilIcons name="image" size={44} color="#0b83a4" />
        </View>
        <View>
          <Text>Trabalho</Text>
          <EvilIcons name="image" size={44} color="#0b83a4" />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardPerfil:{
    width: 200,
    height:200,
    borderRadius: 100,
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 4,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgPerfil:{
    width: '97%',
    height:'97%',
    borderRadius: 100    
  },
  cardSobre:{
    flexDirection: 'row'
  }
});
