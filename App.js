import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import MeowButton from './src/Components/MeowButton';
const PlaceholderImage = require('./assets/kittens.jpeg');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#556B2F' }}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Image source={PlaceholderImage} style={styles.image}/>
      <MeowButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 15,
  },
});