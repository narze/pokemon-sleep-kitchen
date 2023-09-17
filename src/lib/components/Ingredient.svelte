<script lang="ts">
	import type { Ingredient, IngredientKey } from '$lib/data';
	import { ingredientsStore } from '$lib/store';

	export let key: IngredientKey;
	export let ingredient: Ingredient;

	$: count = $ingredientsStore[key] || 0;

	function increment() {
		ingredientsStore.update((ingredients) => {
			ingredients[key] = count + 1;
			return ingredients;
		});
	}

	function decrement() {
		ingredientsStore.update((ingredients) => {
			if (count > 0) {
				ingredients[key] = count - 1;
			}
			return ingredients;
		});
	}
</script>

<div class="relative">
	<button
		class="btn"
		class:variant-ghost-surface={!count}
		class:variant-ghost-primary={count > 0}
		on:click={increment}
	>
		<img height={32} width={32} src={`/images/ingredients/${key}.png`} alt={ingredient.name} />
		<span>{ingredient.name}</span>
		{#if count > 0}
			<span>x {count}</span>
		{/if}
	</button>

	{#if count > 0}
		<button class="btn btn-sm variant-filled-error absolute -top-3 -right-3" on:click={decrement}>
			X
		</button>
	{/if}
</div>
