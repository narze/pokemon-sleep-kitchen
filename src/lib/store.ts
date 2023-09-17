import { localStorageStore } from '@skeletonlabs/skeleton';
import type { Writable } from 'svelte/store';
import type { IngredientKey } from './data';

type IngredientCounter = Partial<Record<IngredientKey, number>>;

export const ingredientsStore: Writable<IngredientCounter> = localStorageStore(
	'pokemon_sleep_kitchen_ingredients',
	{}
);
