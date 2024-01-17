import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateColorsByPercent(num: number) {
  if (num >= 70) {
    return '#22c55e';
  }
  if (num >= 40) {
    return '#d97706';
  }
  return '#dc2626';
}

export function parsePageTitle(text: string, type: string) {
  if (text.includes('_')) {
    return text.split('_').join(' ') + ` ${type}s`;
  }
  if (text.includes('-')) {
    return text.split('-').join(' ') + ` ${type}s`;
  }
  return text + ` ${type}s`;
}
