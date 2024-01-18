<script>
	import { onMount } from 'svelte';
	
	let date = new Date();
	let opsiJam = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
	let opsiTanggal = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	$: tanggal = new Intl.DateTimeFormat('es', opsiTanggal).format(date);
	$: jam = new Intl.DateTimeFormat('es', opsiJam).format(date);
	$: miliseconds = date.getMilliseconds();
	
	onMount(() => {
		const interval = setInterval(() => {
			date = new Date();
			miliseconds = date.getMilliseconds();
		}, 1);
		
		return () => {
			clearInterval(interval);
		}
	})
</script>
<div>
	<p id="tanggal">
		{tanggal}
	</p>
	<p id="jam">
		{jam}:{miliseconds}
	</p>
</div>
	
<style>
	#tanggal {
		font-size: 25px;
		font-weight: bold;
	}
	
	#jam {
		font-size: 4em;
		font-weight: bold;
		margin: 0;
		background: -webkit-linear-gradient(45deg, #C02425, #F0CB35);
  	-webkit-background-clip: text;
  	-webkit-text-fill-color: transparent
	}

	#miliseconds {
		font-size: 20px;
		font-weight: bold;
	}
</style>