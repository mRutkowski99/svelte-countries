<script lang="ts">
	import { onDestroy } from 'svelte';
	import { theme } from '../stores/theme.store';
	import { countries } from '../stores/countries.store';
	import { THEME_STORAGE_KEY } from '../utils/constants';
	import CountryCard from '../components/CountryCard.svelte';

	onDestroy(() => localStorage.setItem(THEME_STORAGE_KEY, $theme));
</script>

{#await countries.load()}
	<p>loading...</p>
{:then}
	<ul class="p-0 grid grid-cols-4 gap-6 mx-auto">
		{#each $countries as country (country.code)}
			<li><CountryCard {country} /></li>
		{/each}
	</ul>
{:catch}
	<p>An error occured. Please try again.</p>
{/await}
