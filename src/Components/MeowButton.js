import { StyleSheet, View, Pressable, Text, Button } from 'react-native';
import React from 'react'
import { MeowSound } from './MeowSound';
const Meow = require('./../../sound/cat.mp3')
import { Audio } from 'expo-av';
import { styles } from './../../styles'
import { useFonts, CuteFont_400Regular } from '@expo-google-fonts/cute-font';

function MeowButton() {
  let [fontsLoaded] = useFonts({
    CuteFont_400Regular,
  });

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

  if (fontsLoaded) {
    return(
      <View style={[styles.buttonContainer, styles.text]}>
          <Button title="MEOW" style={[styles.button, styles.text]} onPress={playSound}>
            <Text style={styles.text}> MEOW </Text>
          </Button>
        </View>
    )
  }
}

export default MeowButton;