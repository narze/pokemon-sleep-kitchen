<script lang="ts">
	import { ingredients, type Recipe } from '$lib/data';
	import { ingredientsStore } from '$lib/store';

	export let key: string;
	export let recipe: Recipe;

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
</script>

<div class="card">
	<header class="card-header font-bold">
		<img height={32} width={32} src={`/images/recipes/${key}.png`} alt={recipe.name} />
		{recipe.name}
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
							height={32}
							width={32}
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
