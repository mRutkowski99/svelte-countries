<script lang="ts">
	import { themeName } from '../utils/themeName';
	import { theme } from '../stores/theme.store';

	const darkThemeImgSrc = '../../moon-solid.svg';
	const lightThemeImgSrc = '../../sun-solid.svg';

	let themeButtonImg = {
		src: darkThemeImgSrc,
		alt: 'Dark mode button icon'
	};

	$: themeButtonImg =
		$theme === 'light'
			? { src: lightThemeImgSrc, alt: 'Light mode button icon' }
			: { src: darkThemeImgSrc, alt: 'Dark mode button icon' };
</script>

<header class="flex justify-between items-center py-4 px-6 shadow-md">
	<h1 class="text-2xl font-bold">Where in the world?</h1>

	<button class="flex gap-1 items-center" on:click={() => theme.toggle()}>
		<img class="w-4 h-4" src={themeButtonImg.src} alt={themeButtonImg.alt} />
		<span class="font-medium">{themeName($theme)}</span>
	</button>
</header>
