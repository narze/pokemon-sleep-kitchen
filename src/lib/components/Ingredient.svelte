<script lang="ts">
	import type { Ingredient } from '$lib/data';

	export let key: string;
	export let ingredient: Ingredient;
</script>

<div class="btn variant-ghost-primary">
	<img height={32} width={32} src={`/images/ingredients/${key}.png`} alt={ingredient.name} />
	<span>{ingredient.name}</span>
</div>
