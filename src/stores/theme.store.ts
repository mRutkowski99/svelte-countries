import type { Theme } from '../domain/theme';
import { getStoredTheme } from '../utils/getStoredTheme';
import { writable } from 'svelte/store';

function createThemeStore() {
	const { subscribe, update } = writable<Theme>(getStoredTheme());

	return {
		subscribe,
		toggle: () => update((theme) => (theme === 'light' ? 'dark' : 'light'))
	};
}

export const theme = createThemeStore();
