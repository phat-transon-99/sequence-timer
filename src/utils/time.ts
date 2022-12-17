import { DropdownItem } from '../components/Dropdown/props';

export function prependZero(num: number): string {
  if (num < 10) {
    return `0${num}`;
  }
  return `${num}`;
}

export function formatTimeStandard(timeInSeconds: number): string {
  // Get the hours
  const hours = Math.floor(timeInSeconds / 3600);

  // Get the minutes
  const minutes = Math.floor((timeInSeconds - hours * 3600) / 60);

  // Get the seconds
  const seconds = timeInSeconds - hours * 3600 - minutes * 60;

  // Format the time and return
  return hours > 0 ? `${prependZero(hours)}:${prependZero(minutes)}:${prependZero(seconds)}` : `${prependZero(minutes)}:${prependZero(seconds)}`;
}

export function extractTime(timeValue: string): number {
  // Create regrex expression
  const expression = /[0-9]+/i;
  const matches = timeValue.match(expression);

  if (matches) {
    return Number.parseInt(matches[0], 10);
  }
  throw new Error('Invalid form');
}

export function convertToSeconds(minutes: number, seconds: number): number {
  return minutes * 60 + seconds;
}

export function extractMinutesAndSeconds(duration: number): { minutes: number, seconds: number } {
  const seconds = duration % 60;
  const minutes = Math.floor(duration / 60);
  return { minutes, seconds };
}

export function findMatchingDropdownItem(
  items: DropdownItem[],
  numericValue: number,
): DropdownItem | undefined {
  return items.find((item) => item.value.startsWith(`${numericValue}`));
}
