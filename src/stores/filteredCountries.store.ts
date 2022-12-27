import { derived, type Readable } from 'svelte/store';
import { countries } from './countries.store';
import { filters } from './filters.store';
import { Region } from '../domain/RegionEnum';
import type { Country } from '../domain/Country';

export const filteredCountries = derived([countries, filters], ([$countries, $filters], set) => {
	let filtered = [...$countries];

	if ($filters.region !== Region.All)
		filtered = filtered.filter((country) => country.region === $filters.region);

	if ($filters.name)
		filtered = filtered.filter((country) =>
			country.name.toLowerCase().includes($filters.name.toLowerCase())
		);

	set([...filtered]);
}) satisfies Readable<Country[]>;
