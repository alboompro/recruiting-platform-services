import styled from 'styled-components'

export const OrderPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
  position: relative;
`

export const CoffeesWrapper = styled.ul`
  margin-top: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
`

export const CoffeeItem = styled.li`
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  border-bottom: 1px solid ${(props) => props.theme['gray-250']};

  img {
    height: 60px;
    width: 60px;
  }
`

export const CoffeeDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  color: ${(props) => props.theme['brown-100']};
`

export const CoffeePreparationTime = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3px;
  font-size: 0.8125rem;
`

interface CheckboxButtonProps {
  isAllowed: boolean
}

export const CheckboxButton = styled.button<CheckboxButtonProps>`
  border: 0;
  cursor: ${(props) => (props.isAllowed ? 'pointer' : 'not-allowed')};
  background-color: transparent;
  margin-left: auto;
  color: ${(props) => props.theme['gray-200']};
`

export const ContinueButton = styled.button`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  border: 0;
  background-color: ${(props) => props.theme.blue};
  color: white;
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: background-color 0.1s;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme['blue-hover']};
  }
`
