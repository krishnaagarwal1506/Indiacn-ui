import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merges class names and resolves conflicting Tailwind utilities, last one winning. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
