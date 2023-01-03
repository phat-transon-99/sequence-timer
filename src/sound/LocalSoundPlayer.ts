import { Audio } from 'expo-av';
import AbstractSoundPlayer from './AbstractSoundPlayer';

export default class LocalSoundPlayer extends AbstractSoundPlayer {
  async play() {
    // Load the sound in
    // eslint-disable-next-line
    const { sound } = await Audio.Sound.createAsync(this.soundSrc);
    // Play the sound
    await sound.playAsync();
  }
}
