<script lang="ts">
	import Notification from '$lib/components/Notification.svelte';
	import generateNotifications from '$lib/Utils/generation-notifications';
	let notifications = $state.raw(generateNotifications(3));
	$inspect(notifications);
</script>

<button onclick={() => {
    notifications = generateNotifications(3);
}}>reset</button>

<ul>
	{#each notifications as notification, index (notification.id)}
		<li>
			<Notification
				{notification}
				onremove={(id) => {
					notifications = notifications.filter((n) => n.id !== id);
                    $inspect(notifications);
				}}
			/>
		</li>
	{:else}
		<p>No hay notifications</p>
	{/each}
</ul>

<style>
	:global {
		body {
			background-color: #222;
			color: #fff;
		}
	}

	ul {
		list-style: none;
		padding: 10px;
		margin: 0;
		li {
			margin-bottom: 10px;
		}
	}
</style>
