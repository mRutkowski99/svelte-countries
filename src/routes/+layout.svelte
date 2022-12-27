<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
</script>

<div class="flex flex-col items-stretch min-h-screen">
	<Header />
	<main class="flex-1 py-8 px-10 justify-items-center block bg-light_bg">
		<slot />
	</main>
</div>
