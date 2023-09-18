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
		target: `popup-${key}`,
		placement: 'top'
	};
</script>

<div class="relative">
	<button
		class="btn [&>*]:pointer-events-none"
		class:variant-ghost-surface={!count}
		class:variant-ghost-primary={count > 0}
		on:click={increment}
		use:popup={popupHover}
	>
		<img height={32} width={32} src={`/images/ingredients/${key}.png`} alt={ingredient.name} />
		{#if count > 0}
			<span>x {count}</span>
		{/if}
	</button>

	{#if count > 0}
		<button class="btn btn-sm variant-filled-error absolute -top-3 -right-3" on:click={decrement}>
			X
		</button>
	{/if}

	<div class="card p-4 variant-filled-primary text-center" data-popup={`popup-${key}`}>
		<p>{ingredient.name}</p>
		<div class="arrow variant-filled-primary" />
	</div>
</div>
