SELECT
	complements.recipe_id as recipe_id,
  ingredients.id as ingredient_id,
  ingredients.name as ingredient_name,
  ingredients.preparation_time as ingredient_preparation_time,
  ingredients.photo as ingredient_photo
FROM complements
JOIN ingredients
ON complements.ingredient_id = ingredients.id
