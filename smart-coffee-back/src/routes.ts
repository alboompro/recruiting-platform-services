import { Router } from 'express'

import { registerNewClient } from './controllers/ClientController'
import { registerNewOrder } from './controllers/ClientRecipeController'
import { listRecipes } from './controllers/RecipeController'
import { listComplements } from './controllers/ComplementController'

const router = Router()

router.post('/register', registerNewClient)

router.get('/recipes', listRecipes)

router.get('/complements', listComplements)

router.post('/ordercoffee', registerNewOrder)

export { router }