import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function sleep(ms: number) {
	const wakeUpTime = Date.now() + ms
	while (Date.now() < wakeUpTime) {
		// Do nothing
	}
}
