<script lang="ts">
    import type { Snippet } from "svelte";
    interface Props {
        left?: Snippet;
        right?: Snippet;
        children: Snippet;
    }
    let {left,right,children}:Props = $props();

</script>

<button>
    {#if left}
    <div class="left-content">
    {@render left()}
    </div>
    {/if}
    {@render children()}
    {#if right}
    <div class="right-content">
    {@render right()}
    </div>
    {/if}
</button>

<style>
    button {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        font-weight: bold;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .left-content {
        margin-inline-end: 10px;
    }
    .right-content {
        margin-inline-start: 10px;
    }
</style>

<!-- {#snippet bold(x:any)}
        <b>{x}</b>
    {/snippet}
{#snippet sum(a:number, b:number)}
    <span>{a} + {b}= {@render bold(a+b)};</span>
{/snippet} -->
<!-- {@render sum(2,2)}
{@render bold('Mas text')} -->