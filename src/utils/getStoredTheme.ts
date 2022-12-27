import type { Theme } from '../domain/Theme';
import { THEME_STORAGE_KEY } from './constants';

function isTheme(value: unknown): value is Theme {
	return value === 'light' || value === 'dark';
}

export function getStoredTheme(): Theme {
	const stored = localStorage.getItem(THEME_STORAGE_KEY);

	if (isTheme(stored)) return stored;
	else return 'light';
}
