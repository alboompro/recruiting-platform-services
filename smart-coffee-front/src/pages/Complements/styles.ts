import styled from 'styled-components'

export const OrderComplementsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px 55px;
  position: relative;
`

export const InstructionsParagraph = styled.p`
  margin-top: 30px;
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  color: ${(props) => props.theme['brown-150']};
`

export const SelectedCoffeesWrapper = styled.ul`
  margin-top: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  gap: 10px;
`

export const SelectedCoffeeWrapper = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${(props) => props.theme['gray-250']};
`

export const SelectedCoffeeItem = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;

  img {
    height: 60px;
    width: 60px;
  }
`

export const SelectedCoffeeDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  color: ${(props) => props.theme['brown-100']};
`

export const SelectedCoffeePreparationTime = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3px;
  font-size: 0.8125rem;
`

export const CoffeeComplementsWrapper = styled.ul`
  margin-left: auto;
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const CoffeeComplementItem = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;

  img {
    height: 40px;
    width: 40px;
  }
`

export const CoffeeComplementDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  color: ${(props) => props.theme['brown-100']};
`

export const CoffeeComplementPreparationTime = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3px;
  font-size: 0.8125rem;
`

export const CheckboxButton = styled.button`
  border: 0;
  cursor: pointer;
  background-color: transparent;
  margin-left: auto;
  color: ${(props) => props.theme['gray-200']};
`

export const GoBackButton = styled.button`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 60px;
  border: 0;
  background-color: ${(props) => props.theme.orange};
  color: white;
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: background-color 0.1s;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme['orange-hover']};
  }
`

export const ContinueButton = styled.button`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 60px;
  border: 0;
  background-color: ${(props) => props.theme['green-200']};
  color: white;
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: background-color 0.1s;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme['green-hover']};
  }
`
