import { StyleSheet, View, Pressable, Text, Button } from 'react-native';
import React from 'react'
import { MeowSound } from './MeowSound';
const Meow = require('./../../sound/cat.mp3')
import { Audio } from 'expo-av';

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#000',
    fontSize: 16,
  },
});

function MeowButton() {

  const [sound, setSound] = React.useState();


  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( Meow )
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return(
    <View style={styles.buttonContainer}>
        <Button title="Play Sound" style={styles.button} onPress={playSound}>
          <Text style={styles.buttonLabel}>MEOW</Text>
        </Button>
      </View>
  )
}

export default MeowButton;