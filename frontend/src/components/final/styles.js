import styled from 'styled-components'

export const Container = styled.div`
  background-color: #f9f9f9;
  width: 320px;
  height: 605px;
  display: flex;
  flex-direction: column;  
`

export const ContainerBody = styled.div`
  padding: 20px 20px;
`

export const Description = styled.span`
  font-size: 26px;
  text-align: center;
  color: #7c6e5f;
  display: flex;
  justify-content: center;
  margin-bottom: 28px;
`

export const ContainerProgress = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;  
  margin-bottom: 31px;
`

export const Progress = styled.div`
  width: 183px;
  height: 183px;
  border: solid 12px rgba(151, 151, 151, 0.48);
  border-radius: 50%;  

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    span {
      font-size: 26px;
      font-weight: bold;
      text-align: center;
      color: #5e4429;

      &:last-child {
        font-size: 10px;
        font-weight: bold;
        text-align: center;
        color: #5e4429;
      }
    }
    
  }
`

export const CouponBox = styled.div`
  width: 100%;
  height: 66px;
  border: solid 3px #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 31px;

  span {
    font-size: 26px;
    color: #5e4429;
    letter-spacing: -0.57px;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

export const ButtonReset = styled.button`  
  cursor: pointer;
  width: 49px;
  height: 49px;
  background-color: #cacaca;
  border: none;
  margin-right: 8px;
`

export const ButtonPrint = styled.button`
  cursor: pointer;
  width: 100%;
  height: 49px;
  font-size: 14px;
  letter-spacing: 2.36px;
  text-align: center;
  color: #ffffff;
  border: none;
  text-transform: uppercase;
  background-color: #34495e;
`