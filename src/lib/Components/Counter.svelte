<script lang="ts">
    let count =$state(0)
    let frecuency = $state(1000);
    let paused = $state(false);

    $effect(() => {
    let interval:ReturnType<typeof setInterval>;
        if (!paused){
            interval = setInterval(() =>{
            count += 1;
        }, frecuency);
        }
        return () => {
            clearInterval(interval);
            console.log('clear');
        };
    });
</script>


<h1>{count}</h1>
{frecuency}
<button onclick={()=>{
    paused = !paused;
}}>{paused ? 'Seguir':'Pausar'}</button>
<button onclick={()=>{
    count = 0;
    const _originalFrequency = frecuency;
    frecuency= 0;
    frecuency = _originalFrequency;
    }}>Reiniciar</button>
<!-- <button onclick={incremnet}>{count}</button> -->
<button onclick={()=>{frecuency *= 2}}>Relentizar</button>
<button onclick={()=>{frecuency /= 2}}>Acelerar</button>
