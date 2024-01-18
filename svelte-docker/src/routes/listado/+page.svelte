<script>
	import { onMount } from 'svelte';

	let posts = [];

	onMount(async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		posts = await response.json();
	});
</script>


	<main>
		<slot />

		<ul>
			{#each posts as post}
				<li>{post.title}</li>
			{/each}
		</ul>
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
