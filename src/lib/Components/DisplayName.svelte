<script lang="ts">

let UserName = $state("gos");
let firsname = $state("gus");
let lastname = $state("andes");
let fullname = ()=>`${firsname} ${lastname}`;
let src = "https://picsum.photos/400/300";
let bio = "hola mundo<b> soy un bio</b>";

$effect(() => {
    console.log("UserName", UserName);
    console.log("firsname", firsname);
    console.log("lastname", lastname);
    console.log("fullname", fullname);
});

</script>


<button onclick={()=>{
    console.log(fullname());
}}>Get full name</button>

<input bind:value={UserName}>
<input value={firsname}
oninput={e => {
    firsname = e.currentTarget.value;
    console.log(fullname());
}}/>

<h1>{UserName  || fullname()}</h1>
<input bind:value={UserName}/>
<input bind:value={firsname}/>
<input bind:value={lastname}/>



<img src={src} alt="a lot a {UserName  || fullname()}"/>

<p>{@html bio}</p>