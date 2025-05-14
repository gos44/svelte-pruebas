<script lang="ts">
	import { untrack } from "svelte";

    let randomNumber= $state (Math.floor(Math.random() * 10));
    let doubleRandomNumber = $derived (randomNumber * 2);
    let history: number[] = $state([untrack(() => randomNumber)]);
    
</script>

<h2>el numero random es :{randomNumber}</h2>
<h2>el double numero random es:{doubleRandomNumber}</h2>
<p>la historia es:{history}</p>

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