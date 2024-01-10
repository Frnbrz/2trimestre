<script>
	
	function handleSubmit(event) {
		event.preventDefault();

		const form = event.target;
		const username = form.username.value;
		const comment = form.comment.value;

		// Guardar los valores en las cookies
		document.cookie = `username=${username}`;
		document.cookie = `comment=${comment}`;

		// Restablecer los valores del formulario
		form.reset();
	}
</script>

<div class="text-column">
	<h1>Contacto</h1>
	<form class="max-w-md mx-auto" on:submit={handleSubmit}>
	<div class="mb-4">
		<label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username:</label>
		<input type="text" id="username" name="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your username">
	</div>
	<div class="mb-4">
		<label for="comment" class="block text-gray-700 text-sm font-bold mb-2">Comment:</label>
		<textarea id="comment" name="comment" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4" placeholder="Enter your comment"></textarea>
	</div>
		<button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
	</form>
</div>
