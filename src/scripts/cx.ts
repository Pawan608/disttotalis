import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

export function cx(...args: Parameters<typeof clsx>) {
  return twMerge(clsx(...args));
}
