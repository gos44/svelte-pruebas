<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import { createCounterState, setCounterContext } from './contexts/counter-context.svelte';

	let { children }: { children: Snippet } = $props();
	let count = $state(0);

	setCounterContext(createCounterState())

</script>

{@render children()}
