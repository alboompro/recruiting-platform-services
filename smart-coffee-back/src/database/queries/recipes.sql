SELECT 
	recipes.id as recipe_id,
  recipes.name as recipe_name,
  recipes.photo as recipe_photo,
  recipe_ingredients.ingredient_id as ingredient_id,
  ingredients.name as ingredient_name,
  ingredients.preparation_time as ingredient_preparation_time,
  ingredients.photo as ingredient_photo
FROM recipes
JOIN recipe_ingredients
ON recipes.id = recipe_ingredients.recipe_id
JOIN ingredients
ON recipe_ingredients.ingredient_id = ingredients.id