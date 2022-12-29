export type TimerCallback = (time: number) => void;
export type EndTimerCallback = () => void;

export default abstract class Timer {
  protected callback: TimerCallback;

  protected endCallback: EndTimerCallback;

  public duration: number;

  abstract start(): void;
  abstract stop(): void;
  abstract clear(): void;

  constructor(duration: number, callback: TimerCallback, endCallback: EndTimerCallback) {
    this.duration = duration;
    this.callback = callback;
    this.endCallback = endCallback;
  }
}
