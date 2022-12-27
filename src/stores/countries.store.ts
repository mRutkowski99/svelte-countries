import type { Country } from '../domain/Country';
import { API_URL_ALL } from '../utils/constants';
import { writable } from 'svelte/store';

function createStore() {
	const { subscribe, set } = writable<Country[]>([]);

	return {
		subscribe,
		load: async () => {
			const response = await fetch(API_URL_ALL);

			if (!response.ok) throw new Error('An error occured. Please try again.');

			const data = await response.json();
			set(
				data.map((country: any) => ({
					name: country.name,
					capital: country.capital,
					population: (<number>country.population).toLocaleString('en-us'),
					region: country.region,
					flag: country.flag,
					code: country.alpha3Code
				}))
			);
		}
	};
}

export const countries = createStore();
