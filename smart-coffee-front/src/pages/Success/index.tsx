import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { differenceInSeconds } from 'date-fns'
import { ToastContainer, toast } from 'react-toastify'
import { ArrowCounterClockwise } from 'phosphor-react'
import {
  ButtonsWrapper,
  CompletedPreparationInformation,
  CouponCodeBox,
  OrderInformationWrapper,
  OrderTimeLeftInformation,
  PrintCouponButton,
  ProgressBarHtml,
  RepeatButton,
  SuccessPageWrapper,
  SuccessTitle,
} from './styles'

import { CoffeeCartContext } from '../../contexts/CartContext'
import { BrandHeader } from '../../components/BrandHeader'
import { convertCoffeePreparationTimeToString } from '../../utils/CoffeePreparationToString'

export function Success() {
  const { activeUser, coffeeCart, clearUserData } =
    useContext(CoffeeCartContext)
  const [secondsPassed, setSecondsPassed] = useState(0)
  const navigate = useNavigate()

  const totalPreparationTime = coffeeCart.reduce((acc, coffee) => {
    const regularCoffeeTime = coffee.ingredients.reduce(
      (ingredientAcc, ingredient) => {
        return ingredientAcc + ingredient.ingredient_preparation_time
      },
      0,
    )
    const complementsAdditionalTime = coffee.complements.reduce(
      (ingredientAcc, ingredient) => {
        return ingredientAcc + ingredient.ingredient_preparation_time
      },
      0,
    )
    return acc + (regularCoffeeTime + complementsAdditionalTime)
  }, 0)

  useEffect(() => {
    let interval: number
    const initialTime = new Date()
    if (!activeUser) {
      navigate('/', { replace: true })
    } else {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(new Date(), initialTime)
        if (secondsDifference >= totalPreparationTime) {
          setSecondsPassed(totalPreparationTime)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [navigate, activeUser, totalPreparationTime])

  const timeLeft = totalPreparationTime - secondsPassed

  function handleRepeatAction() {
    clearUserData()
    navigate('/', { replace: true })
  }

  const successMessage =
    coffeeCart.length === 0
      ? 'Uma pena que você não tomou um de nossos cafés. Fica para uma próxima!'
      : 'Seu pedido já se encontra pronto para ser retirado. Obrigado pela confiança!'

  function printTicket() {
    toast.success('Cupom impresso', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  const progressValue = (secondsPassed / totalPreparationTime) * 100

  return (
    <SuccessPageWrapper>
      <BrandHeader />
      <OrderInformationWrapper>
        {timeLeft !== 0 ? (
          <>
            <SuccessTitle>Pedido realizado com sucesso!</SuccessTitle>
            <OrderTimeLeftInformation>
              <p>{convertCoffeePreparationTimeToString(timeLeft)}</p>
              <span>tempo restante para ficar pronto</span>
              <ProgressBarHtml max="100" value={progressValue} />
            </OrderTimeLeftInformation>
          </>
        ) : (
          <CompletedPreparationInformation>
            {successMessage}
          </CompletedPreparationInformation>
        )}
        <CouponCodeBox>{activeUser?.couponCode}</CouponCodeBox>
      </OrderInformationWrapper>
      <ButtonsWrapper>
        <RepeatButton onClick={handleRepeatAction}>
          <ArrowCounterClockwise size={32} weight="bold" color="white" />
        </RepeatButton>
        <PrintCouponButton onClick={printTicket}>
          Imprimir cupom
        </PrintCouponButton>
      </ButtonsWrapper>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{
          backgroundColor: '#2B8C5F',
          color: 'white',
        }}
      />
    </SuccessPageWrapper>
  )
}
