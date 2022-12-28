<script lang="ts">
	import type { Country } from '../domain/Country';
	import { fade } from 'svelte/transition';

	export let country: Country;
</script>

<a
	href={country.code.toLowerCase()}
	class="shadow-md overflow-hidden flex-col items-stretch block bg-light_element rounded-md mx-auto"
	transition:fade
>
	<div class="w-full h-40">
		<img src={country.flag} alt={country.name + ' flag'} class="w-full h-full  object-cover" />
	</div>
	<div class="flex flex-col gap-4 py-5 px-4">
		<span class="font-medium block">{country.name}</span>

		<dl class="flex-col items-start gap-4 text-homepage">
			<div class="flex gap-1">
				<dt class="font-medium">Population:</dt>
				<dd>{country.population}</dd>
			</div>

			<div class="flex gap-1">
				<dt class="font-medium">Region:</dt>
				<dd>{country.region}</dd>
			</div>

			<div class="flex gap-1">
				<dt class="font-medium">Capital:</dt>
				<dd>{country.capital}</dd>
			</div>
		</dl>
	</div>
</a>

<style>
	a {
		max-width: 18rem;
	}
</style>
