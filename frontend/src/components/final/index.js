import React from 'react'
import Header from '../header'
import Divider from '../divider'
import { Container, ContainerBody, Description, ContainerProgress, Progress,
  CouponBox, ContainerButton, ButtonReset, ButtonPrint } from './styles'
import Reset from '../../assets/images/reset.svg'  

export default () => (
  <Container>
    <ContainerBody>
      <Header/>
      <Divider style={{height: "3px", "margin-bottom": "39px"}}/>
      <Description>Pedido realizado com sucesso!</Description>
      <ContainerProgress>
        <Progress>
          <div>
            <span>2:33 min</span>
            <span>tempo restante para ficar pronto</span>
          </div>
        </Progress>
      </ContainerProgress>
      <CouponBox>
        <span>ASDAER</span>
      </CouponBox>
      <ContainerButton>
        <ButtonReset><img src={Reset} alt="reset"/></ButtonReset>
        <ButtonPrint>Imprimir cupom</ButtonPrint>
      </ContainerButton>
    </ContainerBody>    
  </Container>
)