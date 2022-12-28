export type TimerCallback = (time: number) => void;

export default abstract class Timer {
  protected callback: TimerCallback;

  public duration: number;

  abstract start(): void;
  abstract stop(): void;
  abstract clear(): void;

  constructor(duration: number, callback: TimerCallback) {
    this.duration = duration;
    this.callback = callback;
  }
}
