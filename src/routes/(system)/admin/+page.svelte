<script lang="ts">
	import { onMount } from "svelte";
	import { browser } from "$app/environment";
	import netlifyIdentity from "netlify-identity-widget";
	import { addCms } from "$lib/addCms";

	if (browser) {
		addCms();
	}

	onMount(() => {
		netlifyIdentity.init();

		netlifyIdentity.on("login", (user) => {
			console.log("login ", user);
		});
	});

	// import CMS from 'netlify-cms-app'
</script>

<svelte:head>
	<link href="cms.css" rel="stylesheet">
	<script src="https://unpkg.com/react-markdown@5.0.3/react-markdown.min.js"></script>
</svelte:head>

<!-- <div class="flex justify-center items-center">
	<div data-netlify-identity-button class="p-4 bg-highlight dark:bg-highlight-dark">Login with Netlify Identity</div>
</div> -->