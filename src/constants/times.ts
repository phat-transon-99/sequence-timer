import { DropdownItem } from '../components/Dropdown/props';

export const HOURS: DropdownItem[] = (function generateHours(): DropdownItem[] {
  const hours: DropdownItem[] = [];

  for (let i = 0; i !== 61; i += 1) {
    if (i === 0 || i === 1) {
      hours.push({
        title: `${i} hour`,
        value: `${i}_hour`,
      });
    } else {
      hours.push({
        title: `${i} hours`,
        value: `${i}_hours`,
      });
    }
  }

  return hours;
}());

export const MINUTES: DropdownItem[] = (function generateMinutes(): DropdownItem[] {
  const minutes: DropdownItem[] = [];

  for (let i = 0; i !== 61; i += 1) {
    if (i === 0 || i === 1) {
      minutes.push({
        title: `${i} minute`,
        value: `${i}_minute`,
      });
    } else {
      minutes.push({
        title: `${i} minutes`,
        value: `${i}_minutes`,
      });
    }
  }

  return minutes;
}());

export const SECONDS: DropdownItem[] = (function generateSeconds(): DropdownItem[] {
  const seconds: DropdownItem[] = [];

  for (let i = 0; i !== 61; i += 1) {
    if (i === 0 || i === 1) {
      seconds.push({
        title: `${i} second`,
        value: `${i}_second`,
      });
    } else {
      seconds.push({
        title: `${i} seconds`,
        value: `${i}_seconds`,
      });
    }
  }

  return seconds;
}());
