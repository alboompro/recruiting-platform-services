import React from 'react'
import Header from '../header'
import Divider from '../divider'
import { Container, ContainerBody, ListViewItem, Image, ContainerCheckBox, 
  Checkbox, ComplementsContainer, Description, ContainerButton, Button } from './styles'
import dualcoffee from '../../assets/images/cafe-duplo.svg'

export default () => (
  <Container>
    <ContainerBody>
      <Header/>
      <Divider style={{height: "3px", "margin-bottom": "27px"}}/>
      <Description>Adicione complementos ao seu pedido</Description>
      <ListViewItem>
        <Image src={dualcoffee} alt="logo" />
        <div>
          <span>Café Duplo</span>
          <span>0:45 min</span>
        </div>        
      </ListViewItem>
      <ComplementsContainer>
          <ListViewItem>
            <img src={dualcoffee} alt="logo" />
            <div>
              <span>Café Duplo</span>
              <span>0:45 min</span>
            </div>
            <ContainerCheckBox>
              <Checkbox checked={false} onChange={(e) => console.log(e)}/>
            </ContainerCheckBox>
          </ListViewItem>
          <Divider style={{height: "0px", "margin-bottom": "12px"}}/>
          <ListViewItem>
            <img src={dualcoffee} alt="logo" />
            <div>
              <span>Café Duplo</span>
              <span>0:45 min</span>
            </div>
            <ContainerCheckBox>
              <Checkbox checked={false} onChange={(e) => console.log(e)}/>
            </ContainerCheckBox>
          </ListViewItem>
        </ComplementsContainer>
        <Divider style={{height: "1px", "margin-bottom": "16px"}}/>
        <ListViewItem>
        <Image src={dualcoffee} alt="logo" />
        <div>
          <span>Café Duplo</span>
          <span>0:45 min</span>
        </div>        
      </ListViewItem>
      <ComplementsContainer>
          <ListViewItem>
            <img src={dualcoffee} alt="logo" />
            <div>
              <span>Café Duplo</span>
              <span>0:45 min</span>
            </div>
            <ContainerCheckBox>
              <Checkbox checked={false} onChange={(e) => console.log(e)}/>
            </ContainerCheckBox>
          </ListViewItem>
          <Divider style={{height: "0px", "margin-bottom": "12px"}}/>
          <ListViewItem>
            <img src={dualcoffee} alt="logo" />
            <div>
              <span>Café Duplo</span>
              <span>0:45 min</span>
            </div>
            <ContainerCheckBox>
              <Checkbox checked={false} onChange={(e) => console.log(e)}/>
            </ContainerCheckBox>
          </ListViewItem>
        </ComplementsContainer>
    </ContainerBody>
    <ContainerButton>
      <Button back>Voltar</Button>
      <Button submit>Finalizar</Button>
    </ContainerButton>
  </Container>
)