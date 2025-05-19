<script lang="ts">
	import Konva from "konva";
	import type { Snippet } from "svelte";
	import { setStageContext } from "./konva-context";

    let {children,...props}: {children?: Snippet} & Konva.StageConfig = $props()
    let countainer:HTMLDivElement;
    let stage : Konva.Stage
    let isReady = $state(false)

    setStageContext(()=>stage)

    $effect(()=>{
        stage = new Konva.Stage({
            countainer,
            ...props
        });

        isReady= true
        return ()=>{
            stage.destroy()
        }
    })
</script>
<div bind:this={countainer}>
    {#if isReady}
            {@render children?.()}
    {/if}
</div>