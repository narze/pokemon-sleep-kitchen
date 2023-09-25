<script lang="ts">
	import type { Ingredient, IngredientKey } from '$lib/data';
	import { ingredientsStore } from '$lib/store';
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';

	export let key: IngredientKey;
	export let ingredient: Ingredient;

	$: count = $ingredientsStore[key] || 0;

	function increment() {
		ingredientsStore.update((ingredients) => {
			ingredients[key] = clamp(count + 1);
			return ingredients;
		});
	}

	function clamp(value: number) {
		return Math.min(Math.max(value, 0), 99);
	}

	function setCount(value: number) {
		ingredientsStore.update((ingredients) => {
			ingredients[key] = clamp(value);
			return ingredients;
		});
	}

	function decrement() {
		ingredientsStore.update((ingredients) => {
			ingredients[key] = clamp(count - 1);
			return ingredients;
		});
	}

	const popupHover: PopupSettings = {
		event: 'hover',
		target: `popup-ingredient-${key}`,
		placement: 'top'
	};

	function keydown(event: KeyboardEvent) {
		// console.log(event.key, { ...event });

		if (event.key == 'Enter') {
			increment();
		}

		if (event.key == 'Backspace' || event.key == 'Delete') {
			setCount(0);
		}

		// If event key is number, set count to that number
		if (event.key.match(/[0-9]/)) {
			const newCount = Number(`${count ? count : ''}${event.key}`);

			setCount(newCount);
		}

		if (event.key == 'ArrowLeft') {
			decrement();
		}

		if (event.key == 'ArrowRight') {
			increment();
		}
	}
</script>

<div class="relative">
	<button
		class="btn [&>*]:pointer-events-none space-x-1"
		class:variant-ghost-surface={!count}
		class:variant-ghost-primary={count > 0}
		on:click={increment}
		use:popup={popupHover}
		on:keydown={keydown}
	>
		<img class="w-8 h-8" src={`/images/ingredients/${key}.png`} alt={ingredient.name} />
		<span class="hidden lg:block">{ingredient.name}</span>

		{#if count > 0}
			<span class="text-sm">x {count}</span>
		{/if}
	</button>

	{#if count > 0}
		<button
			tabindex="-1"
			class="btn btn-sm variant-filled-error absolute -top-3 -right-3"
			on:click={decrement}
		>
			X
		</button>
	{/if}
</div>
