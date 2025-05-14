<script>
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
<Button>
    {#snippet left()}
    <Search />
    {/snippet}
    Click
    {#snippet right()}
    <AlarmClock />
    {/snippet}
</Button>