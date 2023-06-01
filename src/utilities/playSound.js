import { Audio } from 'expo-av';

export async function playSound(clip, setState) {
  console.log('Loading Sound');
  const { sound } = await Audio.Sound.createAsync( clip )
  setState(sound);
  console.log('Playing Sound');
  await sound.playAsync();
  return sound;
}
