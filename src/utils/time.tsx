function prependZero(num: number): string {
  if (num < 10) {
    return `0${num}`;
  }
  return `${num}`;
}

export default function formatTimeStandard(timeInSeconds: number): string {
  // Get the hours
  const hours = Math.floor(timeInSeconds / 3600);

  // Get the minutes
  const minutes = Math.floor((timeInSeconds - hours * 3600) / 60);

  // Get the seconds
  const seconds = timeInSeconds - hours * 3600 - minutes * 60;

  // Format the time and return
  return hours > 0 ? `${prependZero(hours)}:${prependZero(minutes)}:${prependZero(seconds)}` : `${prependZero(minutes)}:${prependZero(seconds)}`;
}
