import type { Theme } from '../domain/Theme';

export function themeName(theme: Theme): string {
	if (theme === 'dark') return 'Dark Mode';
	if (theme === 'light') return 'Light Mode';
	else throw new Error('Theme not recognized');
}
