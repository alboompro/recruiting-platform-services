import fs from 'fs'
import { Request, Response } from 'express'
import { dbConnection } from '../mysql'

interface Recipe {
  recipe_id: number
  recipe_name: string
  recipe_photo: string
  ingredients: {
    ingredient_id: number
    ingredient_name: string
    ingredient_preparation_time: number
    ingredient_photo: string
  } []
}

interface RecipesQueryData {
  recipe_id: number
  recipe_name: string
  recipe_photo: string
  ingredient_id: number
  ingredient_name: string
  ingredient_preparation_time: number
  ingredient_photo: string
}

export function listRecipes(req: Request, res: Response) {
  const recipesQuery = fs.readFileSync('./src/database/queries/recipes.sql').toString().replace('\n', '')
  
  dbConnection.query(recipesQuery, (error, results: RecipesQueryData[]) => {
    if (error) {
      return res.status(500).send({ error })
    }
    
    const formattedRecipesArray: Recipe[] = []

    results.forEach(recipe => {
      const recipeIndexInTheArray = formattedRecipesArray.findIndex(item => item.recipe_id === recipe.recipe_id)
      const isRecipeAlreadyInTheArray = recipeIndexInTheArray !== -1
      if(!isRecipeAlreadyInTheArray) {
        const newItem: Recipe = {
          recipe_id: recipe.recipe_id,
          recipe_name: recipe.recipe_name,
          recipe_photo: recipe.recipe_photo,
          ingredients: [{
            ingredient_id: recipe.ingredient_id,
            ingredient_name: recipe.ingredient_name,
            ingredient_preparation_time: recipe.ingredient_preparation_time,
            ingredient_photo: recipe.ingredient_photo,
          }]
        }
        formattedRecipesArray.push(newItem)

      }
      else {
        formattedRecipesArray[recipeIndexInTheArray].ingredients.push({
          ingredient_id: recipe.ingredient_id,
          ingredient_name: recipe.ingredient_name,
          ingredient_preparation_time: recipe.ingredient_preparation_time,
          ingredient_photo: recipe.ingredient_photo,
        })
      }
    })

    return res.status(200).send({ results: formattedRecipesArray })
  })
}