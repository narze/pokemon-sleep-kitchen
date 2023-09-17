<script lang="ts">
	import { ingredients, type Recipe } from '$lib/data';

	export let key: string;
	export let recipe: Recipe;
</script>

<div class="space-y-5">
	<h2 class="h2">{recipe.name} ({key})</h2>

	<img height={32} width={32} src={`/images/recipes/${key}.png`} alt={recipe.name} />

	<div class="flex flex-row space-x-5">
		<div class="flex flex-col space-y-5">
			<h3 class="h3">Ingredients</h3>

			{#each recipe.ingredients as ingredientReq}
				{@const ingredient = ingredients[ingredientReq.key]}
				<div class="flex flex-row space-x-5">
					<div class="flex flex-col space-y-5">
						<h4 class="h4">{ingredient.name}</h4>
					</div>
					<div class="flex flex-col space-y-5">
						<img
							height={32}
							width={32}
							src={`/images/ingredients/${ingredientReq.key}.png`}
							alt={ingredient.name}
						/>
					</div>
					x {ingredientReq.quantity}
				</div>
			{/each}
		</div>
	</div>
</div>
