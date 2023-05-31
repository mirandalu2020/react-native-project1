import { Audio } from 'expo-av';
import React from 'react'

const Meow = require('./../../sound/cat.mp3')

export default function MeowSound() {

  const [sound, setSound] = React.useState();

  playSound = async () => {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(Meow);
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

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={playSound} />
    </View>
  );
}
