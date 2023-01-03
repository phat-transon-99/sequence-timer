export default abstract class AbstractSoundPlayer {
  protected soundSrc: any;

  constructor(source: any) {
    this.soundSrc = source;
  }

  abstract play(): void;
}
