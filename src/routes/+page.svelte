<script lang="ts">
	import Button from "$lib/Components/Button.svelte";
	import Counte from "$lib/Components/Counter.svelte";
    import DisplayName from "$lib/Components/DisplayName.svelte";
	import RandomNumber from "$lib/Components/RandomNumber.svelte";
    import { AlarmCheck, Search } from 'lucide-svelte';
    let html = `<h1>Hello World</h1>`;
    let button:Button ;
    $effect(() => {
    // console.log(button)
    button.getButton().focus();
    });
</script>

<div  class="wrapper">
    {@html  html}
    <div role="presentation" onclickcapture={()=>{
        console.log('este evento es del div');
    }}>
<Button bind:this={
    button
}
size="lg"
href="https://www.google.com"
--buttonBgColor="blue"
--buttonTextColor="red"
onclickcapture={(e) => {e.stopPropagation();
console.log('este evento viene del boton');
}}
onlefthover={() => console.log('isLeftHovered')}>
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
</div>
</div>
<style>
    :global(body)
    {
        background-color: #000000;
    }
    .wrapper :global{
    
    h1{
        color: #ffffff;
    }
    }
</style>
