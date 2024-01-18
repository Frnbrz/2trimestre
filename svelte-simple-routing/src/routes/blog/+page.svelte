<script>
	import { onMount } from 'svelte';

	let projects = [];

	onMount(async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		projects = await response.json();
	});
</script>

<div class="text-column">
	<h1>Blog</h1>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each projects as project}
			<div class="mb-4">
				<div class="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
					<h2 class="text-2xl font-bold mt-2 mb-2">{project.title}</h2>º
					<p class="text-gray-600">{project.body}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
