<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
</script>

<Header />
<main class="py-8 px-10 justify-items-center block bg-light_bg">
	<slot />
</main>
