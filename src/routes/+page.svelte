<script lang="ts">
	import Notification from '$lib/Components/Notification.svelte';
	import generateNotifications from '$lib/Utils/generation-notifications';
	let notifications = $state(generateNotifications());
    console.log(notifications);
</script>

<ul>
	{#each notifications as notification , index}
		<li>
    <Notification {notification} onremove={(id)=>{
        notifications.splice(index,1);
    }} />
		</li>
	{:else}
		<p>No notifications</p>
	{/each}
</ul>

<style>
	:global {
		body {
			background-color: #222;
			color: #fff;
		}
	}
</style>
