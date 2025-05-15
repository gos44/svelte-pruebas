<script lang="ts">
	import { get } from "svelte/store";
const Target = {
firstName:'Gos',
lastName:'andes',
occupations:[],

get FullName(){
    return `${this.firstName} ${this.lastName}`;
},

set occupation(value:string){
    console.log(`adding ${value} to occupation`);
    this.occupations.push(value);
}
}

const handler = {
    get(Target,prop){
        // console.log(Target,props);
        return prop in Target ? Target[prop]: 'NA';
    },
    set(Target,prop,value){
        if(['firstName','lastName'].includes(prop)){
           if(typeof value !== 'string'){
                throw new TypeError(`Propety ${prop} must be a string`);
            }
        }
        // console.log(`Setting: ${prop} = ${value}`);
        Target[prop] = value;
        return true;
    },
};
const proxy = new Proxy(Target,handler);
proxy.firstName = 51;
console.log(proxy.firstName);
</script>

<style>
    :global(body)
    {
        background-color: #000000;
    }
</style>
