<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script>
	const projects= [
		{
			name: 'Project 1',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nisl aliquam nunc',
			img: 'https://picsum.photos/200/300'
		},
		{
			name: 'Project 2',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nisl aliquam nuncl',
			img: 'https://picsum.photos/200/300'
		},
		{
			name: 'Project 3',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nisl aliquam nuncl',
			img: 'https://picsum.photos/200/300'
		}

	]
</script>

<div class="text-column">
	<h1>Portfolio</h1>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
	{#each projects as project}
		<div class="mb-4">
			<div class="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
				<img class="w-full rounded-t-lg" src={project.img} alt={project.name} />
				<h2 class="text-2xl font-bold mt-2 mb-2">{project.name}</h2>
				<p class="text-gray-600">{project.description}</p>
			</div>
		</div>
	{/each}

</div>

	
</div>
