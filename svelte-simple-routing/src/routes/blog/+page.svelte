<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Lista Usuarios</h1>

{#each data.props.users as user}
	<div class="bg-white shadow-md rounded-md p-4 mb-4">
		<h2 class="text-xl">{user.id}</h2>
		<p>{user.title}</p>
	</div>
{/each}
