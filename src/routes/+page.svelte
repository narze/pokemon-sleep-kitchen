<script lang="ts">
	import { recipes, ingredients } from '$lib/data';
	import Recipe from '$lib/components/Recipe.svelte';
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Pokemon Sleep Kitchen</h1>

		<h2 class="h2">Recipes</h2>

		{#each Object.entries(recipes) as [key, recipe]}
			<Recipe {key} {recipe} />
		{/each}
	</div>
</div>
