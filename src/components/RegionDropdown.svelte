<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import { Region } from '../domain/RegionEnum';

	const dispatch = createEventDispatcher();
	const regions = Object.keys(Region) as Region[];
	let hidden = true;

	export let selected: Region = Region.All;

	const onRegionSelect = (region: Region) => {
		hidden = true;
		dispatch('select', region);
	};
</script>

<div class="relative inline-block text-left font-medium text-light_color ">
	<button
		on:click={() => (hidden = !hidden)}
		type="button"
		class="inline-flex w-full justify-center gap-8 rounded-md bg-light_element px-6 py-4 shadow-md"
		id="menu-button"
		aria-expanded="true"
		aria-haspopup="true"
	>
		Filter by Region
		<svg
			class="-mr-1 ml-2 h-5 w-5"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			aria-hidden="true"
		>
			<path
				fill-rule="evenodd"
				d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
				clip-rule="evenodd"
			/>
		</svg>
	</button>

	<ul class="shadow-md rounded-md overflow-hidden" class:hidden transition:fade>
		{#each regions as region}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<li
				class="w-full bg-light_element py-3 px-5 hover:bg-light_bg cursor-pointer"
				on:click={() => onRegionSelect(region)}
				class:selected={region === selected}
			>
				{region}
			</li>
		{/each}
	</ul>
</div>

<style>
	ul {
		position: absolute;
		top: calc(100% + 0.5rem);
		right: 0;
		left: 0;
	}

	.hidden {
		display: none;
	}

	.selected {
		@apply bg-light_bg;
	}
</style>
