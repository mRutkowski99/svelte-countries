<script lang="ts">
	import { theme } from '../stores/theme.store';
	import { onDestroy } from 'svelte';
	import { THEME_STORAGE_KEY } from '../utils/constants';

	onDestroy(() => localStorage.setItem(THEME_STORAGE_KEY, $theme));
</script>
