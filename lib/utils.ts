import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import dayjs from 'dayjs';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parsePageTitle(text: string, secondText: string) {
  let type = secondText === 'tv' ? 'tv shows' : 'movies';
  if (text.includes('_')) {
    return text.split('_').join(' ') + ` ${type}`;
  }
  if (text.includes('-')) {
    return text.split('-').join(' ') + ` ${type}`;
  }
  return text + ` ${type}`;
}

export function formatDate(date: string | number, format?: string) {
  return dayjs(date).format(format ?? 'MMMM DD, YYYY');
}

export function formatRuntime(time: number) {
  let runtime: string = '';
  if (time > 60) {
    let hour = Math.floor(time / 60);
    let minute = Math.floor(time % 60);
    runtime = `${hour}h ${minute}m`;
  } else {
    runtime = `${time}m`;
  }
  return runtime;
}

export const routeFilter = (params: any) => {
  return new URLSearchParams(params);
};
