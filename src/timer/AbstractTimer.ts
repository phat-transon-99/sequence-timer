export type TimerCallback = (time: number) => void;

export abstract class Timer {
  protected callback: TimerCallback;

  abstract start(): void;
  abstract stop(): void;

  constructor(callback: TimerCallback) {
    this.callback = callback;
  }
}
