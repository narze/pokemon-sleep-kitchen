<script lang="ts">
	import { ingredientsStore, recipesScoreStore } from '$lib/store';
	import { ingredients, type Recipe } from '$lib/data';

	export let key: string;
	export let recipe: Recipe;
	export let score: number = 0;

	const ingredientsSum = recipe.ingredients.reduce((acc, val) => acc + val.quantity, 0);

	$: ingredientsRequirements = recipe.ingredients
		.map((ingredientReq) => {
			const ingredient = ingredients[ingredientReq.key];

			return {
				name: ingredient.name,
				key: ingredientReq.key,
				quantity: ingredientReq.quantity,
				owned: $ingredientsStore[ingredientReq.key] || 0
			};
		})
		.map((ingredient) => {
			// Calculation
			return {
				...ingredient,
				needMore: Math.max(ingredient.quantity - ingredient.owned, 0)
			};
		});

	$: isCompleted = ingredientsRequirements.every((ingredient) => ingredient.needMore == 0);
	$: isEmpty = ingredientsRequirements.every((ingredient) => ingredient.owned == 0);
	$: isPartiallyCompleted = !isCompleted && !isEmpty;

	$: score = [
		(isCompleted ? 1 : 0) * 1000,
		ingredientsRequirements.filter((ingredient) => ingredient.needMore == 0).length * 100,
		ingredientsRequirements.filter((ingredient) => ingredient.needMore > 0 && ingredient.owned > 0)
			.length * 10
	].reduce((acc, val) => acc + val, 0);

	$: {
		recipesScoreStore.update((scores) => {
			scores[key] = score;
			return scores;
		});
	}
</script>

<div
	class="card flex-1 min-w-[16rem]"
	class:variant-ghost-surface={isPartiallyCompleted}
	class:variant-ghost-success={isCompleted}
>
	<!-- {score} -->
	<header class="card-header font-bold space-x-1">
		<img class="w-8 h-8 inline-block" src={`/images/recipes/${key}.png`} alt={recipe.name} />
		{recipe.name}
		<div class="w-full" />
		<span
			class="badge"
			class:variant-outline-warning={recipe.type == 'curry'}
			class:variant-outline-success={recipe.type == 'salad'}
			class:variant-outline-tertiary={recipe.type == 'dessert'}>{recipe.type}</span
		>
		<span class="badge variant-outline-surface">{ingredientsSum}</span>
	</header>

	<section class="p-4 flex flex-row space-x-2 justify-center">
		<div class="flex flex-col space-y-2 w-full">
			{#each ingredientsRequirements as ingredient}
				<div
					class="badge"
					class:variant-ghost-surface={ingredient.needMore > 0 && ingredient.owned > 0}
					class:variant-ghost-success={ingredient.needMore == 0}
				>
					<div class="flex flex-col space-y-2">
						<div>{ingredient.name}</div>
					</div>
					<div class="flex flex-col space-y-2">
						<img
							class="w-8 h-8"
							src={`/images/ingredients/${ingredient.key}.png`}
							alt={ingredient.name}
						/>
					</div>
					x {ingredient.quantity}
					{#if ingredient.needMore > 0 && ingredient.owned > 0}
						<div class="flex flex-col space-y-2">
							<div class="text-red-500">({ingredient.needMore})</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</section>
</div>
