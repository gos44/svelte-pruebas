<script lang="ts">
	import konva from 'konva';
	import {Stage ,Layer} from '$lib/Components/konva'
</script>

<Stage width={500} height={500} >
	<Layer>
		<Rect />
	</Layer>
</Stage>

<style>
	:global {
		body {
			background-color: #222;
			color: #fff;
		}
	}
</style>
