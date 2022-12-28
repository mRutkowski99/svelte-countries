<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let value: string;

	$: dispatch('value', value);
</script>

<div class="bg-light_element px-10 py-4 flex items-center gap-3  rounded-md shadow-md">
	<img src="../../magnifying-glass-solid.svg" alt="magnifying glass" class="w-4 h-4" />
	<input type="text" placeholder="Search for a country..." class="flex-1 out" bind:value />
</div>

<style>
	input {
		outline: transparent;
		min-width: 20rem;
	}
</style>
