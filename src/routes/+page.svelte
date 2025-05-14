<script lang="ts">
	import Button from "$lib/Components/Button.svelte";
	import Counte from "$lib/Components/Counter.svelte";
    import DisplayName from "$lib/Components/DisplayName.svelte";
	import RandomNumber from "$lib/Components/RandomNumber.svelte";
    import { Search } from 'lucide-svelte';
    import { AlarmClock } from 'lucide-svelte';


</script>
<!-- <DisplayName /> -->
<!-- <RandomNumber /> -->
<!-- <Counte /> -->

{#snippet left()}
<Search />

{/snippet}
<!-- <Button left={left}>Click</Button> -->
<Button size ="sm" shadow= {true}>
    {#snippet left(isHoreverd:boolean)}
    {#if isHoreverd}
    <Search />
    {:else}
    <AlarmClock />
    {/if}
    {/snippet}
    
    {#snippet children(islefthorevered)}
    Click {islefthorevered}
    {/snippet}

    {#snippet right()}
    <AlarmClock />
    {/snippet}
</Button>