import { Timer } from './AbstractTimer';

export default class SetIntervalTimer extends Timer {
  private timeStart: number = 0;

  private timeElapsed: number = 0;

  private intervalId: ReturnType<typeof setInterval>;

  start(): void {
    // Set start time
    this.timeStart = Date.now();

    // Set interval
    this.intervalId = setInterval(this.onIteration.bind(this), 100);
  }

  stop(): void {
    // Get elapsed time
    this.timeElapsed += Date.now() - this.timeStart;

    // Clear interval
    clearInterval(this.intervalId);
  }

  private onIteration(): void {
    // Get the current timer
    const now = Date.now();

    // Subtract now from timeStart to get secondsPassed
    // Results is in milliseconds
    const secondsPassed = now - this.timeStart + this.timeElapsed;

    // Call the callback
    this.callback(Math.floor(secondsPassed / 1000));
  }
}
