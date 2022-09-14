import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle, Circle, ClockClockwise } from 'phosphor-react'
import {
  CheckboxButton,
  CoffeeComplementDetails,
  CoffeeComplementItem,
  CoffeeComplementPreparationTime,
  CoffeeComplementsWrapper,
  ContinueButton,
  GoBackButton,
  InstructionsParagraph,
  OrderComplementsPageWrapper,
  SelectedCoffeeDetails,
  SelectedCoffeeItem,
  SelectedCoffeePreparationTime,
  SelectedCoffeesWrapper,
  SelectedCoffeeWrapper,
} from './styles'

import { CoffeeCartContext } from '../../contexts/CartContext'
import { api } from '../../services/api'
import { BrandHeader } from '../../components/BrandHeader'
import {
  calculateCoffeePreparationTime,
  convertCoffeePreparationTimeToString,
} from '../../utils/CoffeePreparationToString'

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

type ComplementsByCoffee = {
  recipe_id: number
  ingredients: Ingredient[]
}

interface GetComplementsApiResponse {
  results: ComplementsByCoffee[]
}

type Order = {
  recipe_id: number
  complement_ids: number[]
}
interface RegisterOrderApiRequest {
  user_id: number
  orders: Order[]
}

export function Complements() {
  const [complementsList, setComplementsList] = useState<ComplementsByCoffee[]>(
    [],
  )
  const [complementsSelected, setComplementsSelected] = useState<
    ComplementsByCoffee[]
  >([])
  const { coffeeCart, registerSelectedCoffees, activeUser } =
    useContext(CoffeeCartContext)
  const navigate = useNavigate()

  const filteredComplementsList: ComplementsByCoffee[] = []

  for (const coffee of coffeeCart) {
    const coffeeComplementsExists = complementsList.find(
      (complement) => complement.recipe_id === coffee.recipe_id,
    )
    if (coffeeComplementsExists) {
      filteredComplementsList.push(coffeeComplementsExists)
    }
  }

  const coffeeCartWithPossibleComplements: Coffee[] = coffeeCart.map(
    (coffee) => {
      const complements = filteredComplementsList.find(
        (complement) => complement.recipe_id === coffee.recipe_id,
      )?.ingredients
      if (complements) {
        return {
          ...coffee,
          complements,
        }
      }
      return {
        ...coffee,
        complements: [],
      }
    },
  )

  async function fetchCoffeeComplements() {
    try {
      const { data } = await api.get<GetComplementsApiResponse>('/complements')
      setComplementsList(data.results)
    } catch (error: any) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    const isCartEmpty = coffeeCart.length === 0
    if (isCartEmpty) {
      navigate('/', { replace: true })
    } else {
      fetchCoffeeComplements()
    }
  }, [navigate, coffeeCart])

  function handleComplementSelection(recipeId: number, complement: Ingredient) {
    const recipeIndex = complementsSelected.findIndex(
      (recipe) => recipe.recipe_id === recipeId,
    )

    const recipeHasAnyComplementSelected = recipeIndex !== -1

    if (!recipeHasAnyComplementSelected) {
      const newComplement: ComplementsByCoffee = {
        recipe_id: recipeId,
        ingredients: [complement],
      }
      setComplementsSelected((state) => [...state, newComplement])
    } else {
      const isComplementAlreadySelected = complementsSelected[
        recipeIndex
      ].ingredients.find(
        (item) => item.ingredient_id === complement.ingredient_id,
      )

      if (!isComplementAlreadySelected) {
        const newComplementsSelectedArray = complementsSelected.map((item) => {
          if (item.recipe_id === recipeId) {
            const newIngredientsSelectedArray = [
              ...item.ingredients,
              complement,
            ]
            return {
              ...item,
              ingredients: newIngredientsSelectedArray,
            }
          } else {
            return item
          }
        })

        setComplementsSelected(newComplementsSelectedArray)
      } else {
        const newIngredientsSelectedArray = complementsSelected[
          recipeIndex
        ].ingredients.filter(
          (item) => item.ingredient_id !== complement.ingredient_id,
        )

        const newComplementsSelectedArray = complementsSelected.map((item) => {
          if (item.recipe_id === recipeId) {
            return {
              ...item,
              ingredients: newIngredientsSelectedArray,
            }
          } else {
            return item
          }
        })

        setComplementsSelected(newComplementsSelectedArray)
      }
    }
  }

  function isComplementSelected(recipeId: number, ingredientId: number) {
    const complementIndex = complementsSelected.findIndex(
      (coffee) => coffee.recipe_id === recipeId,
    )

    if (complementIndex === -1) {
      return false
    }

    const isComplementSelected =
      complementsSelected[complementIndex].ingredients.findIndex(
        (complement) => complement.ingredient_id === ingredientId,
      ) !== -1

    return isComplementSelected
  }

  async function handleOrderButton() {
    const finalOrder = coffeeCart.map((coffee) => {
      const complementsWereSelected = complementsSelected.find(
        (item) => item.recipe_id === coffee.recipe_id,
      )
      if (complementsWereSelected) {
        const complementsSelected = complementsWereSelected.ingredients
        return {
          ...coffee,
          complements: complementsSelected,
        }
      } else {
        return coffee
      }
    })

    registerSelectedCoffees(finalOrder)

    const ordersById: Order[] = finalOrder.map((coffee) => {
      const complementIdsArray = coffee.complements.map(
        (complement) => complement.ingredient_id,
      )
      return {
        recipe_id: coffee.recipe_id,
        complement_ids: complementIdsArray,
      }
    })

    if (activeUser) {
      const requestBody: RegisterOrderApiRequest = {
        orders: ordersById,
        user_id: activeUser.id,
      }

      try {
        await api.post('/ordercoffee', { requestBody })
        navigate('/success', { replace: true })
      } catch (error: any) {
        console.log(error.response)
      }
    }
  }

  return (
    <OrderComplementsPageWrapper>
      <BrandHeader />
      <InstructionsParagraph>
        Adicione complementos ao seu pedido
      </InstructionsParagraph>
      <SelectedCoffeesWrapper>
        {coffeeCartWithPossibleComplements.map((coffee) => (
          <SelectedCoffeeWrapper key={coffee.recipe_id}>
            <SelectedCoffeeItem>
              <img src={`../src/assets/${coffee.recipe_photo}`} alt="" />
              <SelectedCoffeeDetails>
                <p>{decodeURIComponent(escape(coffee.recipe_name))}</p>
                <SelectedCoffeePreparationTime>
                  <ClockClockwise size={15} />
                  {calculateCoffeePreparationTime(coffee.ingredients)}
                </SelectedCoffeePreparationTime>
              </SelectedCoffeeDetails>
            </SelectedCoffeeItem>

            <CoffeeComplementsWrapper>
              {coffee.complements.map((complement) => (
                <CoffeeComplementItem key={complement.ingredient_id}>
                  <img
                    src={`../src/assets/${complement.ingredient_photo}`}
                    alt=""
                  />
                  <CoffeeComplementDetails>
                    <p>
                      {decodeURIComponent(escape(complement.ingredient_name))}
                    </p>
                    <CoffeeComplementPreparationTime>
                      <ClockClockwise size={15} />
                      {convertCoffeePreparationTimeToString(
                        complement.ingredient_preparation_time,
                      )}
                    </CoffeeComplementPreparationTime>
                  </CoffeeComplementDetails>
                  <CheckboxButton
                    onClick={() =>
                      handleComplementSelection(coffee.recipe_id, complement)
                    }
                  >
                    {isComplementSelected(
                      coffee.recipe_id,
                      complement.ingredient_id,
                    ) ? (
                      <CheckCircle size={30} weight="fill" color="#4ED9A6" />
                    ) : (
                      <Circle size={30} />
                    )}
                  </CheckboxButton>
                </CoffeeComplementItem>
              ))}
            </CoffeeComplementsWrapper>
          </SelectedCoffeeWrapper>
        ))}
        <ContinueButton onClick={handleOrderButton}>Continuar</ContinueButton>
        <GoBackButton
          onClick={() => {
            navigate('/order')
          }}
        >
          Voltar
        </GoBackButton>
      </SelectedCoffeesWrapper>
    </OrderComplementsPageWrapper>
  )
}
