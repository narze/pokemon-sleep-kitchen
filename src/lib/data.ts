export interface Recipe {
	name: string;
	ingredients: IngredientRequirement[];
	type: 'curry' | 'salad' | 'dessert';
}

interface IngredientRequirement {
	key: IngredientKey;
	quantity: number;
}

export interface Ingredient {
	name: string;
}

export type IngredientKey =
	| 'large_leek'
	| 'tasty_mushroom'
	| 'fancy_egg'
	| 'soft_potato'
	| 'fancy_apple'
	| 'fiery_herb'
	| 'bean_sausage'
	| 'moomoo_milk'
	| 'honey'
	| 'pure_oil'
	| 'warming_ginger'
	| 'snoozy_tomato'
	| 'soothing_cacao'
	| 'slowpoke_tail'
	| 'greengrass_soybeans';

export const ingredients: Record<IngredientKey, Ingredient> = {
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
};

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
	},
	// Salads
	slowpoke_tail_pepper_salad: {
		name: 'Slowpoke Tail Pepper Salad',
		type: 'salad',
		ingredients: [
			{ key: 'slowpoke_tail', quantity: 10 },
			{ key: 'fiery_herb', quantity: 10 },
			{ key: 'pure_oil', quantity: 15 }
		]
	},
	spore_mushroom_salad: {
		name: 'Spore Mushroom Salad',
		type: 'salad',
		ingredients: [
			{ key: 'tasty_mushroom', quantity: 17 },
			{ key: 'snoozy_tomato', quantity: 8 },
			{ key: 'pure_oil', quantity: 8 }
		]
	},
	snow_cloak_caesar_salad: {
		name: 'Snow Cloak Caesar Salad',
		type: 'salad',
		ingredients: [
			{ key: 'moomoo_milk', quantity: 10 },
			{ key: 'bean_sausage', quantity: 6 }
		]
	},
	gluttony_potato_salad: {
		name: 'Gluttony Potato Salad',
		type: 'salad',
		ingredients: [
			{ key: 'soft_potato', quantity: 14 },
			{ key: 'fancy_egg', quantity: 9 },
			{ key: 'bean_sausage', quantity: 7 },
			{ key: 'fancy_apple', quantity: 6 }
		]
	},
	water_veil_tofu_salad: {
		name: 'Water Veil Tofu Salad',
		type: 'salad',
		ingredients: [
			{ key: 'greengrass_soybeans', quantity: 10 },
			{ key: 'snoozy_tomato', quantity: 6 }
		]
	},
	superpower_extreme_salad: {
		name: 'Superpower Extreme Salad',
		type: 'salad',
		ingredients: [
			{ key: 'bean_sausage', quantity: 9 },
			{ key: 'warming_ginger', quantity: 6 },
			{ key: 'fancy_egg', quantity: 6 },
			{ key: 'soft_potato', quantity: 3 }
		]
	},
	bean_ham_salad: {
		name: 'Bean Ham Salad',
		type: 'salad',
		ingredients: [{ key: 'bean_sausage', quantity: 8 }]
	},
	snoozy_tomato_salad: {
		name: 'Snoozy Tomato Salad',
		type: 'salad',
		ingredients: [{ key: 'snoozy_tomato', quantity: 8 }]
	},
	moomoo_caprese_salad: {
		name: 'Moomoo Caprese Salad',
		type: 'salad',
		ingredients: [
			{ key: 'moomoo_milk', quantity: 12 },
			{ key: 'snoozy_tomato', quantity: 6 },
			{ key: 'pure_oil', quantity: 5 }
		]
	},
	contrary_chocolate_meat_salad: {
		name: 'Contrary Chocolate Meat Salad',
		type: 'salad',
		ingredients: [
			{ key: 'soothing_cacao', quantity: 14 },
			{ key: 'bean_sausage', quantity: 9 }
		]
	},
	overheat_ginger_salad: {
		name: 'Overheat Ginger Salad',
		type: 'salad',
		ingredients: [
			{ key: 'fiery_herb', quantity: 17 },
			{ key: 'warming_ginger', quantity: 10 },
			{ key: 'snoozy_tomato', quantity: 8 }
		]
	},
	fancy_apple_salad: {
		name: 'Fancy Apple Salad',
		type: 'salad',
		ingredients: [{ key: 'fancy_apple', quantity: 8 }]
	},
	immunity_leek_salad: {
		name: 'Immunity Leek Salad',
		type: 'salad',
		ingredients: [
			{ key: 'large_leek', quantity: 10 },
			{ key: 'warming_ginger', quantity: 5 }
		]
	},
	dazzling_apple_cheese_salad: {
		name: 'Dazzling Apple Cheese Salad',
		type: 'salad',
		ingredients: [
			{ key: 'fancy_apple', quantity: 15 },
			{ key: 'moomoo_milk', quantity: 5 },
			{ key: 'pure_oil', quantity: 3 }
		]
	},
	ninja_salad: {
		name: 'Ninja Salad',
		type: 'salad',
		ingredients: [
			{ key: 'large_leek', quantity: 15 },
			{ key: 'greengrass_soybeans', quantity: 15 },
			{ key: 'tasty_mushroom', quantity: 12 },
			{ key: 'warming_ginger', quantity: 11 }
		]
	},
	heat_wave_tofu_salad: {
		name: 'Heat Wave Tofu Salad',
		type: 'salad',
		ingredients: [
			{ key: 'greengrass_soybeans', quantity: 10 },
			{ key: 'fiery_herb', quantity: 6 }
		]
	},
	// dessert
	fluffy_sweet_potatoes: {
		name: 'Fluffy Sweet Potatoes',
		type: 'dessert',
		ingredients: [
			{ key: 'soft_potato', quantity: 9 },
			{ key: 'moomoo_milk', quantity: 5 }
		]
	},
	steadfast_ginger_cookies: {
		name: 'Steadfast Ginger Cookies',
		type: 'dessert',
		ingredients: [
			{ key: 'honey', quantity: 14 },
			{ key: 'warming_ginger', quantity: 12 },
			{ key: 'soothing_cacao', quantity: 5 },
			{ key: 'fancy_egg', quantity: 4 }
		]
	},
	fancy_apple_juice: {
		name: 'Fancy Apple Juice',
		type: 'dessert',
		ingredients: [{ key: 'fancy_apple', quantity: 8 }]
	},
	craft_soda_pop: {
		name: 'Craft Soda Pop',
		type: 'dessert',
		ingredients: [{ key: 'honey', quantity: 9 }]
	},
	ember_ginger_tea: {
		name: 'Ember Ginger Tea',
		type: 'dessert',
		ingredients: [
			{ key: 'warming_ginger', quantity: 9 },
			{ key: 'fancy_apple', quantity: 7 }
		]
	},
	jigglypuffs_fruity_flan: {
		name: "Jigglypuff's Fruity Flan",
		type: 'dessert',
		ingredients: [
			{ key: 'honey', quantity: 20 },
			{ key: 'fancy_egg', quantity: 15 },
			{ key: 'moomoo_milk', quantity: 10 },
			{ key: 'fancy_apple', quantity: 10 }
		]
	},
	lovely_kiss_smoothie: {
		name: 'Lovely Kiss Smoothie',
		type: 'dessert',
		ingredients: [
			{ key: 'fancy_apple', quantity: 11 },
			{ key: 'moomoo_milk', quantity: 9 },
			{ key: 'honey', quantity: 7 },
			{ key: 'soothing_cacao', quantity: 8 }
		]
	},
	lucky_chant_apple_pie: {
		name: 'Lucky Chant Apple Pie',
		type: 'dessert',
		ingredients: [
			{ key: 'fancy_apple', quantity: 12 },
			{ key: 'moomoo_milk', quantity: 4 }
		]
	},
	nerolis_restorative_tea: {
		name: "Neroli's Restorative Tea",
		type: 'dessert',
		ingredients: [
			{ key: 'warming_ginger', quantity: 11 },
			{ key: 'fancy_apple', quantity: 15 },
			{ key: 'tasty_mushroom', quantity: 9 }
		]
	},
	sweet_scent_chocolate_cake: {
		name: 'Sweet Scent Chocolate Cake',
		type: 'dessert',
		ingredients: [
			{ key: 'honey', quantity: 9 },
			{ key: 'soothing_cacao', quantity: 8 },
			{ key: 'moomoo_milk', quantity: 7 }
		]
	},
	warm_moomoo_milk: {
		name: 'Warm Moomoo Milk',
		type: 'dessert',
		ingredients: [{ key: 'moomoo_milk', quantity: 7 }]
	},
	cloud_nine_soy_cake: {
		name: 'Cloud Nine Soy Cake',
		type: 'dessert',
		ingredients: [
			{ key: 'fancy_egg', quantity: 8 },
			{ key: 'greengrass_soybeans', quantity: 7 }
		]
	},
	hustle_protein_smoothie: {
		name: 'Hustle Protein Smoothie',
		type: 'dessert',
		ingredients: [
			{ key: 'greengrass_soybeans', quantity: 15 },
			{ key: 'soothing_cacao', quantity: 8 }
		]
	},
	stalwart_vegetable_juice: {
		name: 'Stalwart Vegetable Juice',
		type: 'dessert',
		ingredients: [
			{ key: 'snoozy_tomato', quantity: 9 },
			{ key: 'fancy_apple', quantity: 7 }
		]
	},
	big_malasada: {
		name: 'Big Malasada',
		type: 'dessert',
		ingredients: [
			{ key: 'pure_oil', quantity: 10 },
			{ key: 'moomoo_milk', quantity: 7 },
			{ key: 'honey', quantity: 6 }
		]
	},
	huge_power_soy_donuts: {
		name: 'Huge Power Soy Donuts',
		type: 'dessert',
		ingredients: [
			{ key: 'pure_oil', quantity: 9 },
			{ key: 'greengrass_soybeans', quantity: 6 },
			{ key: 'soothing_cacao', quantity: 7 }
		]
	}
} satisfies Record<string, Recipe>;
