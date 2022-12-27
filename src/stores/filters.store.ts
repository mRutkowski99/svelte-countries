import { Region } from '..//domain/RegionEnum';
import { writable } from 'svelte/store';

export interface Filters {
	name: string;
	region: Region;
}

const initFilters: Filters = { name: '', region: Region.All };

function createStore() {
	const { subscribe, update, set } = writable<Filters>({ ...initFilters });

	return {
		subscribe,
		updateNameFilter: (name: string) => update((filter) => ({ ...filter, name })),
		updateRegionFilter: (region: Region) => update((filter) => ({ ...filter, region })),
		clear: () => set({ ...initFilters })
	};
}

export const filters = createStore();
