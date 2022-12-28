<script lang="ts">
	import { onDestroy } from 'svelte';
	import { theme } from '../stores/theme.store';
	import { countries } from '../stores/countries.store';
	import { filters } from '../stores/filters.store';
	import { filteredCountries } from '../stores/filteredCountries.store';
	import { THEME_STORAGE_KEY } from '../utils/constants';
	import CountryCard from '../components/CountryCard.svelte';
	import SearchInput from '../components/SearchInput.svelte';
	import RegionDropdown from '../components/RegionDropdown.svelte';

	onDestroy(() => localStorage.setItem(THEME_STORAGE_KEY, $theme));
</script>

<div class="mb-10 flex justify-between flex-wrap gap-3">
	<SearchInput on:value={(e) => filters.updateNameFilter(e.detail)} />
	<RegionDropdown
		selected={$filters.region}
		on:select={(e) => filters.updateRegionFilter(e.detail)}
	/>
</div>
{#await countries.load()}
	<p>loading...</p>
{:then}
	<ul class="p-0 grid grid-cols-4 gap-6 mx-auto">
		{#each $filteredCountries as country (country.code)}
			<li><CountryCard {country} /></li>
		{/each}
	</ul>
{:catch}
	<p>An error occured. Please try again.</p>
{/await}
