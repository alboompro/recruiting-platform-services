import { createContext, ReactNode, useState } from 'react'

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

type User = {
  id: number
  name: string
  email: string
  couponCode: string
}

interface CoffeeCartContextType {
  activeUser: User | undefined
  coffeeCart: Coffee[]
  registerActiveUser: (data: User) => void
  registerSelectedCoffees: (data: Coffee[]) => void
  clearUserData: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CoffeeCartContext = createContext({} as CoffeeCartContextType)

export function CoffeeCartContextProvider({
  children,
}: CartContextProviderProps) {
  const [activeUser, setActiveUser] = useState<User | undefined>(undefined)
  const [coffeeCart, setCoffeeCart] = useState<Coffee[]>([])

  function registerActiveUser(data: User) {
    setActiveUser(data)
  }

  function registerSelectedCoffees(data: Coffee[]) {
    setCoffeeCart(data)
  }

  function clearUserData() {
    setActiveUser(undefined)
    setCoffeeCart([])
  }

  return (
    <CoffeeCartContext.Provider
      value={{
        activeUser,
        coffeeCart,
        registerActiveUser,
        registerSelectedCoffees,
        clearUserData,
      }}
    >
      {children}
    </CoffeeCartContext.Provider>
  )
}
