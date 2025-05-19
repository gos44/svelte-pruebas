<script lang="ts">
	import konva from 'konva';
	let container: HTMLDivElement;
	$effect(()=>{
		const stage = new konva.Stage({
			container,
			width: 500, // corregido
			height: 500
		})
		const layer = new konva.Layer(); // corregido
		const rect1 = new konva.Rect({
			x: 20,
			y: 20,
			width: 100,
			height: 60,
			fill: 'purple',
			stroke: 'white',
			strokeWidth: 4
		});
		layer.add(rect1);
		stage.add(layer);
	})
</script>

<div bind:this={container}></div>

<style>
	:global {
		body {
			background-color: #222;
			color: #fff;
		}
	}
</style>
