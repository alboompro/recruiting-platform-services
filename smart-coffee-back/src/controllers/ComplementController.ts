import fs from 'fs'
import { Request, Response } from 'express'
import { dbConnection } from '../mysql'

interface RecipeComplements {
  recipe_id: number 
  ingredients: {
    ingredient_id: number
    ingredient_name: string
    ingredient_preparation_time: number
    ingredient_photo: string
  } []
}

interface ComplementsQueryData {
  recipe_id: number
  ingredient_id: number
  ingredient_name: string
  ingredient_preparation_time: number
  ingredient_photo: string
}

export function listComplements(req: Request, res: Response) {
  const complementsQuery = fs.readFileSync('./src/database/queries/complements.sql').toString().replace('\n', '')
  
  dbConnection.query(complementsQuery, (error, results: ComplementsQueryData[]) => {
    if (error) {
      return res.status(500).send({ error })
    }
    
    const formattedComplementsArray: RecipeComplements[] = []

    results.forEach(complement => {
      const recipeIndexInTheArray = formattedComplementsArray.findIndex(item => item.recipe_id === complement.recipe_id)
      const isRecipeAlreadyInTheArray = recipeIndexInTheArray !== -1
      if(!isRecipeAlreadyInTheArray) {
        const newItem: RecipeComplements = {
          recipe_id: complement.recipe_id,
          ingredients: [{
            ingredient_id: complement.ingredient_id,
            ingredient_name: complement.ingredient_name,
            ingredient_photo: complement.ingredient_photo,
            ingredient_preparation_time: complement.ingredient_preparation_time
          }]
        }
        formattedComplementsArray.push(newItem)
      } else {
        formattedComplementsArray[recipeIndexInTheArray].ingredients.push({
          ingredient_id: complement.ingredient_id,
          ingredient_name: complement.ingredient_name,
          ingredient_photo: complement.ingredient_photo,
          ingredient_preparation_time: complement.ingredient_preparation_time
        })
      }
    })

    return res.status(200).send({ results: formattedComplementsArray })
  })
}