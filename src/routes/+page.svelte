<script lang="ts">
	import ClickToCount from '$lib/Components/ClickToCount.svelte';
	import DoubleClickToCount from '$lib/components/DoubleClickToCount.svelte';
	
</script>

<ClickToCount />
<DoubleClickToCount />

<style>
	:global {
		body {
			background-color: #222;
			color: #fff;
		}
	}
</style>


