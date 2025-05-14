<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	let isLeftHovered = $state(false);

	type Props = HTMLButtonAttributes & {
		left?: Snippet<[boolean]>;
		right?: Snippet;
		children: Snippet<[boolean]>;
		size?: 'sm' | 'lg';
		shadow?: boolean;
	};
	let { left, right, size = 'sm', shadow = false, children, ...props }: Props = $props();
</script>

<button class:sm={size == 'sm'} class:lg={size == 'lg'} class:shadow {...props}>
	{#if left}
		<div
			role="presentation"
			class="left-content"
			onmouseenter={() => {
				isLeftHovered = true;
			}}
			onmouseleave={() => {
				isLeftHovered = false;
			}}
		>
			{@render left(isLeftHovered)}
		</div>
	{/if}
	{@render children(isLeftHovered)}
	{#if right}
		<div class="right-content">
			{@render right()}
		</div>
	{/if}
</button>

<style lang="scss">
	 button {
        background-color: #d8c625;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        font-weight: bold;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        &.sm {
		height: 45px;
	}
	&.lg {
		height: 45px;
		font-size: 20px;
	}
	&.shadow {
		box-shadow: 0 0 10px rgba(1, 1, 0, 3);
	}
    &:disabled {
			opacity: 0.6;
			cursor: not-allowed;
		}
	&:hover {
			background-image: linear-gradient(to right, #eb0e0e, #2600ff);
			color: #fff;
		}
	&:active {
			background-image: linear-gradient(to right, #a7af3b, #ffffff);
		}
	.left-content {
		margin-inline-end: 10px;
	}

	.right-content {
		margin-inline-start: 10px;
	}
}
</style>
