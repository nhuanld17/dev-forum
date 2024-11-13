import { type ClassValue, clsx} from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * helper function to merge tailwind classes
 * use ClassVlue from clsx to accept multiple types of input
 * use clsx to merge classes
 * use twMerge to merge tailwind classes
 * @param inputs 
 * @returns {string}
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
