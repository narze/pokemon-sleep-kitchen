<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppBar, AppShell, storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<svelte:head>
	<title>Pokemon Sleep Kitchen</title>

	<!-- Open Graph-->
	<meta property="og:title" content="Pokemon Sleep Kitchen" />
	<meta
		property="og:description"
		content="A tool for Pokemon Sleep that lists applicable recipes from ingredients you have."
	/>
	<meta
		property="og:image"
		content="https://pptr.io/api/screenshot?url=https://pokemon-sleep-kitchen.vercel.app"
	/>
	<meta property="og:url" content="https://pokemon-sleep-kitchen.vercel.app" />
	<meta property="og:type" content="website" />
</svelte:head>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header" />

	<!-- Page Route Content -->
	<slot />

	<svelte:fragment slot="footer">
		<AppBar
			gridColumns="grid-cols-1"
			slotDefault="place-self-center text-center"
			background="bg-transparent"
		>
			<div class="text-center text-sm text-gray-500 py-2">
				This website is not an official Pokemon Sleep website.
			</div>
			<div class="text-sm">
				made with 🧡 by <a
					href="https://narze.live"
					target="_blank"
					class="text-primary-500 hover:text-primary-800">narze</a
				>
			</div>
			<div class="text-sm">
				<a
					href="https://github.com/narze/pokemon-sleep-kitchen"
					target="_blank"
					class="text-primary-500 hover:text-primary-800">Source Code</a
				>
			</div>
		</AppBar>
	</svelte:fragment>
</AppShell>
