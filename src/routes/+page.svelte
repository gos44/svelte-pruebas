<script lang="ts">
	import longpress from '$lib/actions/longpress.svelte';

	let showButton =$state(true)
	let duration = $state({value:300})
</script>

<label>
	<input type="checkbox" bind:checked={showButton}/>
	Togle
</label>

<label >
<input type="range" bind:value={duration.value} max={4000} step={100}/>{duration.value}ms
</label>

{#if showButton}
<button	
use:longpress={()=>({duration})}
onlongpress={()=>{
	console.log('long onlongpress')
}}>
text
</button>
{/if}
<style>
	:global {
		body {
			background-color: #222;
			color: #fff;
			padding: 0;
			margin: 0;
		}
	}
</style>
