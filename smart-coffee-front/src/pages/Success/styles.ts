import styled from 'styled-components'

export const SuccessPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
`

export const SuccessTitle = styled.p`
  width: 80%;
  margin-top: 40px;
  font-size: 1.8rem;
  color: ${(props) => props.theme['brown-150']};
  text-align: center;
`

export const OrderInformationWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const OrderTimeLeftInformation = styled.div`
  margin: 160px 0 135px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  p {
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => props.theme['brown-200']};
  }

  span {
    width: 40%;
    text-align: center;
    font-size: 0.875rem;
    color: ${(props) => props.theme['brown-150']};
  }
`

export const CompletedPreparationInformation = styled.p`
  margin: 200px 0 195px;
  text-align: center;
  width: 80%;
  font-size: 1.5rem;
  color: ${(props) => props.theme['green-200']};
`

export const ProgressBarHtml = styled.progress`
  margin-top: 10px;
  -webkit-appearance: none;
  appearance: none;

  width: 100%;
  height: 15px;

  ::-webkit-progress-bar {
    background-color: ${(props) => props.theme['gray-250']};
    border-radius: 99999px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  }

  ::-webkit-progress-value {
    background-color: ${(props) => props.theme['green-hover']};
    border-radius: 99999px;
  }
`

export const CouponCodeBox = styled.p`
  width: 100%;
  height: 68px;
  line-height: 60px;
  text-align: center;
  font-size: 1.8rem;
  border: 4px dashed ${(props) => props.theme['gray-200']};
  color: ${(props) => props.theme['brown-150']};
`

export const ButtonsWrapper = styled.div`
  margin-top: 60px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 8px;
`

export const RepeatButton = styled.button`
  border: 0;
  height: 100%;
  width: 60px;
  background: ${(props) => props.theme['gray-300']};
  border: 1px solid ${(props) => props.theme['gray-400']};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PrintCouponButton = styled.button`
  flex: 1;
  height: 100%;
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
