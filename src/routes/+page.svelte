<script lang="ts">
	import Button from "$lib/Components/Button.svelte";
	import Counte from "$lib/Components/Counter.svelte";
    import DisplayName from "$lib/Components/DisplayName.svelte";
	import RandomNumber from "$lib/Components/RandomNumber.svelte";
    import { AlarmCheck, Search } from 'lucide-svelte';
</script>


<Button size="lg"  bgColor="blue" textColor="white">
	{#snippet left(isHovered)}
		{#if isHovered}
			<Search />
		{:else}
			<AlarmCheck />
		{/if}
	{/snippet}
	Text
	{#snippet right()}
		<AlarmCheck />
	{/snippet}
</Button>
<style>
    :global(body)
    {
        background-color: #000000;  
    }


</style>

