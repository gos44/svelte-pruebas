<script lang="ts">
	import Konva from "konva";
	import { onDestroy, type Snippet } from "svelte";
	import { getStageContext } from "./konva-context";

    let {children,...props}:{children?: Snippet} & Konva.StageConfig = $props();

    const stage = getStageContext()
    const node = new Konva.Layer(props)
    stage.add(node)

    onDestroy (()=>{
        node.destroy()
    })
</script>
{@render children?.()}