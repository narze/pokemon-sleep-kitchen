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
	import { recipeTypesStore, recipesScoreStore, resetIngredients } from '$lib/store';
	import { flip } from 'svelte/animate';

	$: ingredientRecords = Object.entries(ingredients) as [
		key: IngredientKey,
		ingredient: IngredientType
	][];

	let recipesFiltered = orderByScore(recipes);

	recipesScoreStore.subscribe(() => {
		recipeTypesStore.subscribe((types) => {
			recipesFiltered = orderByScore(recipes)
				.reverse()
				.filter(([, recipe]) => types.length == 0 || types.includes(recipe.type));
		});
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

		<div>
			<div class="flex flex-wrap gap-4 overflow-y-auto py-4 pr-3 max-h-[12rem]">
				{#each ingredientRecords as [key, ingredient]}
					<Ingredient {key} {ingredient} />
				{/each}
			</div>

			<!-- Pop-ups -->
			{#each ingredientRecords as [key, ingredient]}
				<div
					class="card p-4 variant-filled-primary text-center z-10"
					data-popup={`popup-ingredient-${key}`}
				>
					<p>{ingredient.name}</p>
					<div class="arrow variant-filled-primary" />
				</div>
			{/each}
		</div>

		<h3 class="h3 space-x-4">
			<span>Recipes</span>

			{#each ['curry', 'salad', 'dessert'] as type}
				{@const selected = $recipeTypesStore.includes(type)}
				<button
					class="btn btn-sm"
					class:variant-ghost-primary={selected}
					class:variant-ghost-surface={!selected}
					on:click={() => {
						recipeTypesStore.update((types) => {
							if (types.includes(type)) {
								types = types.filter((t) => t !== type);
							} else {
								types = [...types, type];
							}

							return types;
						});
					}}
				>
					{type}
				</button>
			{/each}
		</h3>

		<div class="flex gap-4 flex-wrap">
			{#each recipesFiltered as [key, recipe] (key)}
				<div class="flex flex-1 min-w-[16rem]" animate:flip={{ duration: 400 }}>
					<RecipeComponent {key} {recipe} />
				</div>
			{/each}
		</div>
	</div>
</div>
