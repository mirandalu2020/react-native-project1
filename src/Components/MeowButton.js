import { StyleSheet, View, Pressable, Text, Button } from 'react-native';
import React from 'react'
const Meow = require('./../../assets/sound/cat.mp3')
const cringyMeow = require('./../../assets/sound/cringyMeow.mp3')
import { Audio } from 'expo-av';
import { styles } from './../../styles'
import { useFonts, CuteFont_400Regular } from '@expo-google-fonts/cute-font';

function MeowButton() {
  let [fontsLoaded] = useFonts({
    CuteFont_400Regular,
  });

  const [sound, setSound] = React.useState();
  
  async function defaultMeowSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( Meow )
    setSound(sound);
    console.log('Playing Sound');
    await sound.playAsync();
  }

  async function cringyMeowSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( cringyMeow )
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
          <Pressable title="MEOW" style={[styles.button, styles.text]} onPress={defaultMeowSound} onLongPress={cringyMeowSound}>
            <Text style={styles.text}> MEOW </Text>
          </Pressable>
        </View>
    )
  }
}

export default MeowButton;