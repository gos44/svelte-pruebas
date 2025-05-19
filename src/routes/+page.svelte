<script lang="ts">
	import Counters from '$lib/components/Counters.svelte';
	import ClickToCount from '$lib/components/ClickToCount.svelte';
</script>

<ClickToCount />

<Counters>
	<ClickToCount />
	<ClickToCount />
</Counters>

<Counters>
	<ClickToCount />
	<ClickToCount />
</Counters>
<ClickToCount />

<style>
	:global {
		body {
			background-color: #222;
			color: #fff;
		}
	}
</style>
