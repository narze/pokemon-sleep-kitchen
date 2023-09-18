<script lang="ts">
	import type { Ingredient, IngredientKey } from '$lib/data';
	import { ingredientsStore } from '$lib/store';
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';

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

	const popupHover: PopupSettings = {
		event: 'hover',
		target: `popup-ingredient-${key}`,
		placement: 'top'
	};
</script>

<div class="relative">
	<button
		class="btn [&>*]:pointer-events-none space-x-1"
		class:variant-ghost-surface={!count}
		class:variant-ghost-primary={count > 0}
		on:click={increment}
		use:popup={popupHover}
	>
		<img class="w-8 h-8" src={`/images/ingredients/${key}.png`} alt={ingredient.name} />
		<span class="hidden lg:block">{ingredient.name}</span>

		{#if count > 0}
			<span class="text-sm">x {count}</span>
		{/if}
	</button>

	{#if count > 0}
		<button class="btn btn-sm variant-filled-error absolute -top-3 -right-3" on:click={decrement}>
			X
		</button>
	{/if}
</div>
