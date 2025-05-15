<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	
	let isLeftHovered = $state(false);
	let button: HTMLButtonElement | HTMLAnchorElement;

	type Props =(
	| (HTMLButtonAttributes & {href?:never})
	| (HTMLAnchorAttributes & {href:string})) & {
		left?: Snippet<[boolean]>;
		right?: Snippet;
		children: Snippet<[boolean]>;
		size?: 'sm' | 'lg';
		shadow?: boolean;
		onlefthover?: () => void;
		

	};
	let { left, right, size = 'sm', shadow = false, children,onlefthover, ...props }: Props = $props();
	export function focus(){
		button.focus();
	}
	export function getButton(){
		return button;
	}
</script>

<svelte:element
this={props.href? 'a':'button'}
bind:this={button}
class:sm={size == 'sm'}
class:lg={size == 'lg'}
class:shadow {...props}
class="button"
>
<div class="flex">
	{#if left}
		<div
			role="presentation"
			class="left-content"
			onmouseenter={() => {
				onlefthover?.();
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
	</div>
</svelte:element>

<style lang="scss">
	 .button {
        background-color: var(--buttonBgColor,#d8c625);
        border: none;
        color:var(--buttonTextColor,#fffffd);
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        font-weight: bold;
        margin: 4px 2px;
        cursor: pointer;
		font-family: sans-serif;
		.flex{
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		}
		background-image: linear-gradient(to right, #a7af3b, #5f37f0);
		transition: all 0.3s ease-in-out;
		&:focus {
			outline: none;
		}
		&:active {
			transform: scale(0.95);
		}
		&:disabled {
			background-color: #ccc;
			color: #666;
			cursor: not-allowed;
		}
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
			background-image: linear-gradient(to right, #a7af3b, #5f37f0);
		}
	.left-content {
		margin-inline-end: 10px;
	}

	.right-content {
		margin-inline-start: 10px;
	}
}
</style>
