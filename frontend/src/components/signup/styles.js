import styled from 'styled-components'

export const Container = styled.div`
  background-color: #f9f9f9;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 20px 0px;
`

export const Logo = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 45px;
`

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`


export const Label = styled.label`
  display: flex;
  flex-direction: column;

  span {
    font-size: 14px;
    letter-spacing: 0.76px;
    color: #858585;
    margin-bottom: 7px;
    margin-left: 10px;
  }

  input {
    outline: none;
    width: 280px;
    height: 48px;
    border-radius: 3px;
    border: solid 1px #dddddd;
    background-color: #ffffff;
    padding: 10px;
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 30px;
    }
  }
`

export const Button = styled.button`
  width: 183px;
  height: 50px;
  background-color: #34495e;
  font-size: 14px;
  letter-spacing: 2.36px;
  text-align: center;
  color: #ffffff;
  border: none;
  text-transform: uppercase;
  margin-bottom: 53px;
  cursor: pointer;
`