import { Request, Response } from 'express'
import { dbConnection } from '../mysql'

type Order = {
  recipe_id: number
  complement_ids: number[]
}

interface RegisterOrderApiRequest {
  user_id: number
  orders: Order[]
}

export function registerNewOrder(req: Request, res: Response) {
  const { requestBody } = req.body
  const { orders, user_id } = requestBody as RegisterOrderApiRequest

  if(!orders) {
    return res.status(400).send({ message: 'Malformed body' })
  }

  orders.forEach(order => {
    dbConnection.query(
      'INSERT INTO client_recipes (recipe_id, client_id) VALUES (?,?)', 
      [order.recipe_id, user_id],
      (error, results) => {
        if (error) {
          return res.status(403).send({ error })
        }

        const clientRecipeInsertedId = results.insertId
        const isThereAnyComplement = order.complement_ids.length > 0

        if(isThereAnyComplement) {
          order.complement_ids.forEach(complement => {
            dbConnection.query(
              'INSERT INTO client_recipe_ingredients (ingredient_id, client_recipe_id) VALUES (?,?)', 
              [complement, clientRecipeInsertedId],
              (error) => {
                if (error) {
                  return res.status(403).send({ error })
                }
              }
            )
          }) 
        }
      }
    ) 
  })

  return res.status(201).send({ message: 'Item(s) successfully ordered' })
}