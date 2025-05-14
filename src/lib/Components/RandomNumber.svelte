<script lang="ts">
	import { onMount, tick, untrack } from "svelte";

    let randomNumber= $state (Math.floor(Math.random() * 10));
    let doubleRandomNumber = $derived (randomNumber * 2);
    let history: number[] = $state([untrack(() => randomNumber)]);
    let historyPTag:HTMLParagraphElement;

    onMount(()=>{
    console.log("the component is mounted");
    return  () => {
        console.log("the component hass unmounted");
    };
    })

    $effect(()=>{
    history.length;
    console.log("$efect", historyPTag.innerHTML);

    tick().then(() => {
    console.log("despues de tick", historyPTag?.innerHTML);
    });
    return  () => {
        console.log("Pre efect cleanup");
    };
    });

    $effect.pre(()=>{
    history.length;
    console.log("$efect.pre", historyPTag?.innerHTML);
    return  () => {
        console.log("efect cleanup");
    };
    })

</script>

<h2>el numero random es :{randomNumber}</h2>
<h2>el double numero random es:{doubleRandomNumber}</h2>
<p bind:this={historyPTag}>la historia es:{history}</p>

<button onclick={() => { randomNumber = Math.floor(Math.random() * 10);
    history.push(randomNumber);}}>
    Generar nuevo numero
</button>

<!-- // $effect(() => {
    //    randomNumber; // doubleRandomNumber = randomNumber * 2;
    //    untrack(()=> {
    //         history.push(randomNumber);
    //         console.log("history", history);
    //     });
    // }); -->