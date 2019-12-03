import styled, { css } from 'styled-components'

export const Container = styled.div`
  background-color: #f9f9f9;
  width: 320px;
  height: 100%;
  display: flex;
  flex-direction: column;  
`

export const ContainerBody = styled.div`
  padding: 20px 20px;
`

export const Description = styled.span`
  font-size: 15px;
  color: #7c6e5f;
  display: flex;
  justify-content: center;
  margin-bottom: 28px;
`

export const ListViewItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 8px;

    span {
      font-size: 14px;
      line-height: 1;
      letter-spacing: 0.75px;
      color: #887a6a;

      &:last-child {
        font-size: 10px;
      }
    }    
  }
`

export const ComplementsContainer = styled.div`
  display: flex;
  flex-direction: column;  
  margin-left: 67px;
  margin-bottom: 16px;

  img {
    width: 41px;
    height: 41px;
  }
`

export const Image = styled.img`
  width: 60px;
  height: 60px;
`

export const ContainerCheckBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
export const Checkbox = styled.input.attrs({type: 'checkbox'})`
  height: 28px;
  width: 28px;
  border-radius: 50%;
  border: 2px solid #ccc;
  -webkit-appearance: none;

  ${props => props.checked && css`
    background-color: #66bb6a;
  `}
`

export const ContainerButton = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
`

export const Button = styled.button`
  width: 100%;
    height: 50px;
    font-size: 14px;
    letter-spacing: 2.36px;
    text-align: center;
    color: #ffffff;
    border: none;
    text-transform: uppercase;
    cursor: pointer;

    ${props => props.back && css`
      background-color: #d15f41;
    `};

    ${props => props.submit && css`
      background-color: #3dc890;
    `};
`