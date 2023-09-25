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
	import { onMount } from 'svelte';
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();
	let isSafari = true;

	// Check if the user agent contains "Safari" or "AppleWebKit"
	onMount(() => {
		isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
	});

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

	function openModal() {
		const modal: ModalSettings = {
			type: 'alert',
			title: 'Keyboard Mode',
			body: [
				"<kbd class='kbd'>Tab</kbd> to switch between ingredients",
				"<kbd class='kbd'>⬅</kbd> & <kbd class='kbd'>➡</kbd> to change quantity on ingredient in focus",
				"Type in numbers <kbd class='kbd'>0</kbd> - <kbd class='kbd'>9</kbd> to change quantity on ingredient in focus",
				"<kbd class='kbd'>Backspace</kbd> or <kbd class='kbd'>Delete</kbd> to reset ingredient quantity"
			].join('<br />')
		};
		modalStore.trigger(modal);
	}
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5 px-4 py-8">
		<h1 class="h1">
			<span class="gradient-heading">Pokemon Sleep Kitchen</span>
		</h1>

		<div>
			<button tabindex="-1" class="btn btn-sm variant-outline-primary" on:click={openModal}
				>Keyboard mode</button
			>
		</div>

		<h3 class="h3 space-x-4">
			<span>Ingredients</span>

			<!-- svelte-ignore a11y-autofocus -->
			<button class="btn btn-sm variant-outline-warning" on:click={resetIngredients} autofocus
				>Reset</button
			>
		</h3>

		<div>
			<div class="flex flex-wrap gap-4 overflow-y-auto py-4 pr-3 max-h-[14rem] lg:max-h-none">
				{#each ingredientRecords as [key, ingredient]}
					<Ingredient {key} {ingredient} />
				{/each}
			</div>

			<!-- Pop-ups -->
			{#each ingredientRecords as [key, ingredient]}
				<div
					class="lg:invisible card p-4 variant-filled-primary text-center z-10"
					data-popup={`popup-ingredient-${key}`}
				>
					<p>{ingredient.name}</p>
					<div class="arrow variant-filled-primary" />
				</div>
			{/each}
		</div>

		<h3 class="h3 flex space-x-4">
			<span>Recipes</span>

			<span class="flex gap-2 flex-wrap">
				{#each ['curry', 'salad', 'dessert'] as type}
					{@const selected = $recipeTypesStore.includes(type)}
					<button
						class="btn btn-sm capitalize"
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
						<span class="pr-1">
							<img
								class="w-4 h-4 sm:w-6 sm:h-6 inline-block"
								src={`/images/recipes/mixed_${type}.png`}
								alt={`Mixed ${type}`}
							/>
						</span>
						{type}
					</button>
				{/each}
			</span>
		</h3>

		<div
			class="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-4 flex-wrap"
		>
			{#if isSafari}
				<!-- Safari flip animation is buggy -->
				{#each recipesFiltered as [key, recipe] (key)}
					<div class="flex flex-1">
						<RecipeComponent {key} {recipe} />
					</div>
				{/each}
			{:else}
				{#each recipesFiltered as [key, recipe] (key)}
					<div class="flex flex-1" animate:flip={{ duration: 400 }}>
						<RecipeComponent {key} {recipe} />
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
	.gradient-heading {
		@apply bg-clip-text text-transparent box-decoration-clone;
		/* Direction */
		@apply bg-gradient-to-br;
		/* Color Stops */
		@apply from-primary-500 via-tertiary-500 to-secondary-500;
	}
</style>
