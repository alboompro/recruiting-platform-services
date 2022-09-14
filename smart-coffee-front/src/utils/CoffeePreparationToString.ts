type Ingredient = {
  ingredient_id: number
  ingredient_name: string
  ingredient_preparation_time: number
  ingredient_photo: string
}

export function calculateCoffeePreparationTime(ingredients: Ingredient[]) {
  const totalSeconds = ingredients.reduce((acc, ingredient) => {
    return acc + ingredient.ingredient_preparation_time
  }, 0)

  return convertCoffeePreparationTimeToString(totalSeconds)
}

export function convertCoffeePreparationTimeToString(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, '0')
  const seconds = (totalSeconds % 60).toString().padStart(2, '0')

  return minutes + ':' + seconds + ' min'
}
