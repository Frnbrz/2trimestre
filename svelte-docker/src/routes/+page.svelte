<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script>
	import Jam from './Clock.svelte';
	let name = "Francisco";
</script>

<main>
	<h1>Hola, {name}!</h1>
	<Jam />
</main>
<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Segoe UI";
	}
	
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	h1 {
		font-size: 2.5em;
	}
</style>