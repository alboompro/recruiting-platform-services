import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { CheckCircle, Circle, ClockClockwise } from 'phosphor-react'
import {
  CheckboxButton,
  CoffeeDetails,
  CoffeePreparationTime,
  ContinueButton,
  OrderPageWrapper,
  CoffeeItem,
  CoffeesWrapper,
} from './styles'

import { CoffeeCartContext } from '../../contexts/CartContext'
import { api } from '../../services/api'
import { BrandHeader } from '../../components/BrandHeader'
import { OrderAlertDialog } from '../../components/OrderAlertDialog'
import { calculateCoffeePreparationTime } from '../../utils/CoffeePreparationToString'

type Ingredient = {
  ingredient_id: number
  ingredient_name: string
  ingredient_preparation_time: number
  ingredient_photo: string
}

type Coffee = {
  recipe_id: number
  recipe_name: string
  recipe_photo: string
  ingredients: Ingredient[]
  complements: Ingredient[]
}

type RecipesResponseData = {
  results: {
    recipe_id: number
    recipe_name: string
    recipe_photo: string
    ingredients: Ingredient[]
  }[]
}

export function Order() {
  const [coffeeList, setCoffeeList] = useState<Coffee[]>([])
  const { activeUser, registerSelectedCoffees, coffeeCart } =
    useContext(CoffeeCartContext)
  const [selectedCoffees, setSelectedCoffees] = useState<Coffee[]>(() => {
    const isCartEmpty = coffeeCart.length === 0
    if (!isCartEmpty) {
      return coffeeCart
    } else {
      return []
    }
  })
  const [isAlertDialogOpen, setIsAlertDialog] = useState(false)
  const navigate = useNavigate()

  const maxCoffeesToBeSelected = 2
  const isCoffeeAdditionAllowed =
    selectedCoffees.length < maxCoffeesToBeSelected

  async function fetchRecipes() {
    try {
      const { data } = await api.get<RecipesResponseData>('/recipes')
      const coffeeList = data.results.map((coffee) => {
        return {
          ...coffee,
          complements: [],
        }
      })
      setCoffeeList(coffeeList)
    } catch (error: any) {
      console.log(error.response.data.error)
    }
  }

  useEffect(() => {
    if (activeUser) {
      fetchRecipes()
    } else {
      navigate('/', { replace: true })
    }
  }, [activeUser, navigate])

  function isCoffeeSelected(recipeId: number) {
    return (
      selectedCoffees.findIndex((coffee) => coffee.recipe_id === recipeId) !==
      -1
    )
  }

  function handleCoffeeSelection(recipeId: number) {
    const isCoffeeAlreadySelected = selectedCoffees.find(
      (recipe) => recipe.recipe_id === recipeId,
    )
    if (isCoffeeAlreadySelected) {
      const newSelectedCoffeesArray = selectedCoffees.filter(
        (coffee) => coffee.recipe_id !== recipeId,
      )
      setSelectedCoffees(newSelectedCoffeesArray)
    } else {
      if (isCoffeeAdditionAllowed) {
        const coffeeSelectedExists = coffeeList.find(
          (coffee) => coffee.recipe_id === recipeId,
        )
        if (coffeeSelectedExists) {
          setSelectedCoffees((state) => [...state, coffeeSelectedExists])
        }
      }
    }
  }

  function handleContinueClick() {
    const isCartEmpty = selectedCoffees.length === 0
    if (isCartEmpty) {
      setIsAlertDialog(true)
    } else {
      registerSelectedCoffees(selectedCoffees)
      navigate('/order/complements', { replace: true })
    }
  }

  function toggleAlertDialog() {
    setIsAlertDialog((state) => !state)
  }

  return (
    <OrderPageWrapper>
      <BrandHeader />
      <CoffeesWrapper>
        {coffeeList.map((coffee) => (
          <CoffeeItem key={coffee.recipe_id}>
            <img src={`./src/assets/${coffee.recipe_photo}`} alt="" />
            <CoffeeDetails>
              <p>{decodeURIComponent(escape(coffee.recipe_name))}</p>
              <CoffeePreparationTime>
                <ClockClockwise size={15} />
                {calculateCoffeePreparationTime(coffee.ingredients)}
              </CoffeePreparationTime>
            </CoffeeDetails>
            <CheckboxButton
              onClick={() => handleCoffeeSelection(coffee.recipe_id)}
              isAllowed={
                isCoffeeSelected(coffee.recipe_id) || isCoffeeAdditionAllowed
              }
            >
              {isCoffeeSelected(coffee.recipe_id) ? (
                <CheckCircle size={40} weight="fill" color="#4ED9A6" />
              ) : (
                <Circle size={40} />
              )}
            </CheckboxButton>
          </CoffeeItem>
        ))}
      </CoffeesWrapper>
      <ContinueButton onClick={handleContinueClick}>Continuar</ContinueButton>
      <AlertDialog.Root
        open={isAlertDialogOpen}
        onOpenChange={toggleAlertDialog}
      >
        <OrderAlertDialog />
      </AlertDialog.Root>
    </OrderPageWrapper>
  )
}
