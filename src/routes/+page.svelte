<script lang="ts">
	import {
		recipes,
		ingredients,
		type IngredientKey,
		type Ingredient as IngredientType
	} from '$lib/data';
	import Ingredient from '$lib/components/Ingredient.svelte';
	import Recipe from '$lib/components/Recipe.svelte';

	$: ingredientRecords = Object.entries(ingredients) as [
		key: IngredientKey,
		ingredient: IngredientType
	][];
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Pokemon Sleep Kitchen</h1>

		<h2 class="h2">Ingredients</h2>
		<div class="flex gap-4 flex-wrap">
			{#each ingredientRecords as [key, ingredient]}
				<Ingredient {key} {ingredient} />
			{/each}
		</div>

		<h2 class="h2">Recipes</h2>

		<div class="flex gap-4 flex-wrap">
			{#each Object.entries(recipes) as [key, recipe]}
				<Recipe {key} {recipe} />
			{/each}
		</div>
	</div>
</div>
