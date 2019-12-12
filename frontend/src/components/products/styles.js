import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f9f9f9;
  width: 320px;
  height: 585px;
  display: flex;
  flex-direction: column;  
`

export const ContainerBody = styled.div`
  padding: 20px 20px;
`

export const Image = styled.img`
  width: 60px;
  height: 60px;
`

export const ListViewItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 8px;
    width: 40%; 

    span {
      font-size: 14px;
      line-height: 1;
      letter-spacing: 0.75px;
      color: #887a6a;      
    }    
  }
`
export const ContainerCheckBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
  cursor: pointer;
`

export const Popup = styled.div`
  width: 100%;
  height: 30px;
  border: solid 1px red;
  display: none;
  justify-content: center;
  align-items: center;
  margin-bottom: 31px;
  ${props => props.style}

  span {
    font-size: 16px;
    color: red;
    letter-spacing: -0.57px;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;

  button {
    width: 100%;
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
  }
`