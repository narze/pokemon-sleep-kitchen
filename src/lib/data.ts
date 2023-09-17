export interface Recipe {
	name: string;
	ingredients: IngredientRequirement[];
	type: 'curry' | 'salad' | 'drinks';
}

interface IngredientRequirement {
	key: keyof typeof ingredients;
	quantity: number;
}

export interface Ingredient {
	name: string;
}

export const ingredients = {
	large_leek: {
		name: 'Large Leek'
	},
	tasty_mushroom: {
		name: 'Tasty Mushroom'
	},
	fancy_egg: {
		name: 'Fancy Egg'
	},
	soft_potato: {
		name: 'Soft Potato'
	},
	fancy_apple: {
		name: 'Fancy Apple'
	},
	fiery_herb: {
		name: 'Fiery Herb'
	},
	bean_sausage: {
		name: 'Bean Sausage'
	},
	moomoo_milk: {
		name: 'Moomoo Milk'
	},
	honey: {
		name: 'Honey'
	},
	pure_oil: {
		name: 'Pure Oil'
	},
	warming_ginger: {
		name: 'Warming Ginger'
	},
	snoozy_tomato: {
		name: 'Snoozy Tomato'
	},
	soothing_cacao: {
		name: 'Soothing Cacao'
	},
	slowpoke_tail: {
		name: 'Slowpoke Tail'
	},
	greengrass_soybeans: {
		name: 'Greengrass Soybeans'
	}
} satisfies Record<string, Ingredient>;

export const recipes = {
	// Curry
	fancy_apple_curry: {
		name: 'Fancy Apple Curry',
		ingredients: [{ key: 'fancy_apple', quantity: 7 }],
		type: 'curry'
	},
	grilled_tail_curry: {
		name: 'Grilled Tail Curry',
		ingredients: [
			{ key: 'slowpoke_tail', quantity: 8 },
			{ key: 'fiery_herb', quantity: 25 }
		],
		type: 'curry'
	},
	solar_power_tomato_curry: {
		name: 'Solar Power Tomato Curry',
		ingredients: [
			{ key: 'snoozy_tomato', quantity: 10 },
			{ key: 'fiery_herb', quantity: 5 }
		],
		type: 'curry'
	},
	dream_eater_butter_curry: {
		name: 'Dream Eater Butter Curry',
		ingredients: [
			{ key: 'soft_potato', quantity: 18 },
			{ key: 'snoozy_tomato', quantity: 15 },
			{ key: 'soothing_cacao', quantity: 12 },
			{ key: 'moomoo_milk', quantity: 10 }
		],
		type: 'curry'
	},
	spicy_leek_curry: {
		name: 'Spicy Leek Curry',
		ingredients: [
			{ key: 'large_leek', quantity: 14 },
			{ key: 'warming_ginger', quantity: 10 },
			{ key: 'fiery_herb', quantity: 8 }
		],
		type: 'curry'
	},
	spore_mushroom_curry: {
		name: 'Spore Mushroom Curry',
		type: 'curry',
		ingredients: [
			{ key: 'tasty_mushroom', quantity: 14 },
			{ key: 'soft_potato', quantity: 9 }
		]
	},
	egg_bomb_curry: {
		name: 'Egg Bomb Curry',
		type: 'curry',
		ingredients: [
			{ key: 'honey', quantity: 12 },
			{ key: 'fancy_apple', quantity: 11 },
			{ key: 'fancy_egg', quantity: 8 },
			{ key: 'soft_potato', quantity: 4 }
		]
	},
	hearty_cheeseburger_curry: {
		name: 'Hearty Cheeseburger Curry',
		type: 'curry',
		ingredients: [
			{ key: 'moomoo_milk', quantity: 8 },
			{ key: 'bean_sausage', quantity: 8 }
		]
	},
	soft_potato_chowder: {
		name: 'Soft Potato Chowder',
		type: 'curry',
		ingredients: [
			{ key: 'moomoo_milk', quantity: 10 },
			{ key: 'soft_potato', quantity: 8 },
			{ key: 'tasty_mushroom', quantity: 4 }
		]
	},
	simple_chowder: {
		name: 'Simple Chowder',
		type: 'curry',
		ingredients: [{ key: 'moomoo_milk', quantity: 7 }]
	},
	beanburger_curry: {
		name: 'Beanburger Curry',
		type: 'curry',
		ingredients: [{ key: 'bean_sausage', quantity: 7 }]
	},
	mild_honey_curry: {
		name: 'Mild Honey Curry',
		type: 'curry',
		ingredients: [{ key: 'honey', quantity: 7 }]
	},
	drought_katsu_curry: {
		name: 'Drought Katsu Curry',
		type: 'curry',
		ingredients: [
			{ key: 'bean_sausage', quantity: 10 },
			{ key: 'pure_oil', quantity: 5 }
		]
	},
	melty_omelette_curry: {
		name: 'Melty Omelette Curry',
		type: 'curry',
		ingredients: [
			{ key: 'fancy_egg', quantity: 10 },
			{ key: 'snoozy_tomato', quantity: 6 }
		]
	},
	bulk_up_bean_curry: {
		name: 'Bulk Up Bean Curry',
		type: 'curry',
		ingredients: [
			{ key: 'greengrass_soybeans', quantity: 12 },
			{ key: 'bean_sausage', quantity: 6 },
			{ key: 'fiery_herb', quantity: 4 },
			{ key: 'fancy_egg', quantity: 4 }
		]
	}
	// Salads

	// Drinks
} satisfies Record<string, Recipe>;
