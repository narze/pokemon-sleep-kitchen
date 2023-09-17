<script lang="ts">
	import { ingredients, type Recipe } from '$lib/data';

	export let key: string;
	export let recipe: Recipe;
</script>

<div class="card">
	<header class="card-header font-bold">
		<img height={32} width={32} src={`/images/recipes/${key}.png`} alt={recipe.name} />
		{recipe.name}
	</header>

	<section class="p-4 flex flex-row space-x-2">
		<div class="flex flex-col space-y-2">
			{#each recipe.ingredients as ingredientReq}
				{@const ingredient = ingredients[ingredientReq.key]}
				<div class="flex flex-row space-x-2">
					<div class="flex flex-col space-y-2">
						<div>{ingredient.name}</div>
					</div>
					<div class="flex flex-col space-y-2">
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
	</section>
</div>
