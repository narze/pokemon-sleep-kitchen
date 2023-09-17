<script lang="ts">
	import {
		recipes,
		ingredients,
		type IngredientKey,
		type Ingredient as IngredientType,
		type Recipe
	} from '$lib/data';
	import Ingredient from '$lib/components/Ingredient.svelte';
	import RecipeComponent from '$lib/components/Recipe.svelte';
	import { recipesScoreStore, resetIngredients } from '$lib/store';

	$: ingredientRecords = Object.entries(ingredients) as [
		key: IngredientKey,
		ingredient: IngredientType
	][];

	let recipesOrdered = orderByScore(recipes);

	recipesScoreStore.subscribe(() => {
		recipesOrdered = orderByScore(recipes).reverse();
	});

	function orderByScore(recipes: Record<string, Recipe>) {
		return Object.entries(recipes).sort((a, b) => {
			const aScore = calculateScore(a[0]);
			const bScore = calculateScore(b[0]);

			return aScore - bScore;
		});
	}

	function calculateScore(recipeKey: string) {
		return $recipesScoreStore[recipeKey] || 0;
	}
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5 px-4 py-8">
		<h1 class="h1">Pokemon Sleep Kitchen</h1>

		<h3 class="h3 space-x-4">
			<span>Ingredients</span><button
				class="btn btn-sm variant-outline-warning"
				on:click={resetIngredients}>Reset</button
			>
		</h3>
		<div class="flex gap-4 flex-wrap">
			{#each ingredientRecords as [key, ingredient]}
				<Ingredient {key} {ingredient} />
			{/each}
		</div>

		<h3 class="h3">Recipes</h3>

		<div class="flex gap-4 flex-wrap">
			{#each recipesOrdered as [key, recipe]}
				<RecipeComponent {key} {recipe} />
			{/each}
		</div>
	</div>
</div>
